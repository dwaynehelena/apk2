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

    constructor() {
        // In a real app, we would fetch from OpenMeteo using GPS coords
        // this.fetchWeather();
    }
}
