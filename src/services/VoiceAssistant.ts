import { signal } from '@preact/signals-core';

export class VoiceAssistant {
    isListening = signal(false);
    lastCommand = signal("");

    private recognition: SpeechRecognition | null = null;

    constructor() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = false;

            this.recognition.onstart = () => this.isListening.value = true;
            this.recognition.onend = () => this.isListening.value = false;

            this.recognition.onresult = (event: any) => {
                const last = event.results.length - 1;
                const command = event.results[last][0].transcript.trim().toLowerCase();
                this.lastCommand.value = command;
                console.log("Voice Command:", command);
                this.processCommand(command);
            };

            // Auto-start for demo
            try {
                this.recognition.start();
            } catch (e) {
                console.log("Auto-start voice blocked");
            }
        }
    }

    private processCommand(cmd: string) {
        // Simple command parser
        if (cmd.includes('lights on')) {
            // signal event or call HAL
        }
    }
}
