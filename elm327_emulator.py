import socket
import threading
import time

def handle_client(client_socket):
    print("ELM327 Client connected")
    while True:
        try:
            data = client_socket.recv(1024).decode('utf-8').strip()
            if not data:
                break
            print(f"Received Command: {data}")
            
            # ELM327 commands often end with \r
            cmd = data.replace('\r', '').strip()
            
            response = ""
            if cmd == "ATZ":
                response = "ELM327 v2.1\r\r>"
            elif cmd == "ATE0":
                response = "OK\r\r>"
            elif cmd == "ATL0":
                response = "OK\r\r>"
            elif cmd == "ATSP0":
                response = "OK\r\r>"
            elif cmd == "010C":
                # RPM: ((A*256)+B)/4. 3000 RPM -> (3000*4)=12000 -> 0x2EE0
                response = "41 0C 2E E0\r\r>"
            elif cmd == "010D":
                # Speed: A. 80 km/h -> 0x50
                response = "41 0D 50\r\r>"
            elif cmd == "0105":
                # Coolant: A-40. 90C -> 130 -> 0x82
                # Note: Some PIDs like 0105 return single byte
                response = "41 05 82\r\r>"
            elif cmd == "0104":
                # Load: (A*100)/255. 40% -> 102 -> 0x66
                response = "41 04 66\r\r>"
            elif cmd == "0111":
                # Throttle: (A*100)/255. 25% -> 64 -> 0x40
                response = "41 11 40\r\r>"
            elif cmd == "010F":
                # Intake: A-40. 35C -> 75 -> 0x4B
                response = "41 0F 4B\r\r>"
            elif cmd == "0142":
                # Voltage: ((A*256)+B)/1000. 14.2V -> 14200 -> 0x3778
                response = "41 42 37 78\r\r>"
            elif cmd == "2102":
                # Mopar Trans Temp: (A * 256 + B) / 4 - 40. 85C -> 500 -> 0x01F4
                response = "61 02 01 F4\r\r>"
            else:
                response = "NO DATA\r\r>"
            
            debug_resp = response.replace('\r', '[R]')
            print(f"Sending: {debug_resp}")
            client_socket.send(response.encode('utf-8'))
        except Exception as e:
            print(f"Error: {e}")
            break
    client_socket.close()
    print("ELM327 Client disconnected")

def start_emulator():
    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind(('0.0.0.0', 35000))
    server.listen(5)
    print("ELM327 Emulator listening on 0.0.0.0:35000")
    print("Use 'adb reverse tcp:35000 tcp:35000' to point localhost:35000 on emulator to this script.")
    while True:
        client, addr = server.accept()
        print(f"Accepted connection from {addr}")
        client_handler = threading.Thread(target=handle_client, args=(client,))
        client_handler.start()

if __name__ == "__main__":
    start_emulator()
