"use client";

import { useEffect, useState } from "react";

type Weather = {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    weather_code: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

const weatherIcons: Record<number, string> = {
  0: "☀️",
  1: "🌤️",
  2: "⛅",
  3: "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌧️",
  61: "🌦️",
  63: "🌧️",
  65: "🌧️",
  71: "❄️",
  80: "🌦️",
  95: "⛈️",
};

const weatherText: Record<number, string> = {
  0: "Sonnig",
  1: "Überwiegend sonnig",
  2: "Teilweise bewölkt",
  3: "Bewölkt",
  45: "Nebel",
  48: "Reifnebel",
  51: "Nieselregen",
  53: "Nieselregen",
  55: "Starker Nieselregen",
  61: "Leichter Regen",
  63: "Regen",
  65: "Starker Regen",
  71: "Schnee",
  80: "Regenschauer",
  95: "Gewitter",
};

export default function Weather() {
  const [weather, setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    async function loadWeather() {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=45.0155&longitude=14.0375&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto"
        );

        const data = await response.json();
        setWeather(data);
      } catch (e) {
        console.error(e);
      }
    }

    loadWeather();
  }, []);

  if (!weather) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          Wetter wird geladen...
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            ☀️ Aktuelles Wetter in Hreljići
          </h2>

          <p className="text-slate-600 mt-4 text-xl">
            Perfekt für Pool, Strand und Ausflüge
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="grid lg:grid-cols-2 gap-12">

            <div>

              <div className="text-7xl font-bold">
                {Math.round(weather.current.temperature_2m)}°
              </div>

              <div className="text-2xl mt-4">
                {weatherIcons[weather.current.weather_code]}{" "}
                {weatherText[weather.current.weather_code]}
              </div>

              <div className="mt-8 space-y-3 text-lg text-slate-600">

                <p>
                  💨 Wind: {Math.round(weather.current.wind_speed_10m)} km/h
                </p>

                <p>
                  💧 Luftfeuchtigkeit: {weather.current.relative_humidity_2m} %
                </p>

                <p>
                  📍 House Villa Talija · Hreljići
                </p>

              </div>

            </div>

            <div className="grid grid-cols-5 gap-4">

              {weather.daily.time.slice(0,5).map((day,index)=>(
                <div
                  key={day}
                  className="rounded-2xl bg-slate-100 p-4 text-center hover:bg-slate-200 transition"
                >

                  <div className="font-semibold">
                    {new Date(day).toLocaleDateString("de-DE",{
                      weekday:"short"
                    })}
                  </div>

                  <div className="text-3xl mt-4">
                    {weatherIcons[weather.daily.weather_code[index]]}
                  </div>

                  <div className="text-xl font-bold mt-3">
                    {Math.round(weather.daily.temperature_2m_max[index])}°
                  </div>

                  <div className="text-slate-500">
                    {Math.round(weather.daily.temperature_2m_min[index])}°
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}