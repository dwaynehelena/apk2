import { signal } from '@preact/signals-core';

export interface WeatherData {
    temp: number;
    condition: string;
    location: string;
    forecast: { day: string, temp: number, icon: string }[];
}

export class WeatherService {
    current = signal<WeatherData>({
        temp: 24,
        condition: 'Sunny',
        location: 'San Francisco, CA',
        forecast: [
            { day: 'Mon', temp: 24, icon: '☀️' },
            { day: 'Tue', temp: 22, icon: '⛅' },
            { day: 'Wed', temp: 19, icon: '🌧️' },
            { day: 'Thu', temp: 21, icon: '⛅' },
            { day: 'Fri', temp: 25, icon: '☀️' },
        ]
    });

    constructor(private hal: any) { // Type as VehicleHAL if importing
        // Fetch weather when location changes significantly or on init
        this.fetchWeather();

        // Refresh every 15 minutes
        setInterval(() => this.fetchWeather(), 15 * 60 * 1000);
    }

    async fetchWeather() {
        // Use HAL location if available, else default to SF (or handle error)
        const lat = this.hal.motion.location.lat.value || 37.7749;
        const lng = this.hal.motion.location.lng.value || -122.4194;

        try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;
            const res = await fetch(url);
            const data = await res.json();

            this.current.value = {
                temp: Math.round(data.current.temperature_2m),
                condition: this.getConditionText(data.current.weather_code),
                location: `${lat.toFixed(2)}, ${lng.toFixed(2)}`, // Ideally reverse geocode here
                forecast: data.daily.time.slice(0, 5).map((t: string, i: number) => ({
                    day: new Date(t).toLocaleDateString('en-US', { weekday: 'short' }),
                    temp: Math.round(data.daily.temperature_2m_max[i]),
                    icon: this.getIcon(data.daily.weather_code[i])
                }))
            };
        } catch (e) {
            console.error("Weather fetch failed", e);
        }
    }

    private getConditionText(code: number): string {
        if (code === 0) return 'Sunny';
        if (code < 3) return 'Partly Cloudy';
        if (code < 50) return 'Foggy';
        if (code < 80) return 'Rainy';
        return 'Stormy';
    }

    private getIcon(code: number): string {
        if (code === 0) return '☀️';
        if (code < 3) return '⛅';
        if (code < 50) return '🌫️';
        if (code < 80) return '🌧️';
        return '⛈️';
    }
}
