"use client";

import { useEffect, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import multiMonthPlugin from "@fullcalendar/multimonth";
import deLocale from "@fullcalendar/core/locales/de";

type CalendarEvent = {
  title: string;
  start: string;
  end: string;
  display: "background";
  backgroundColor: string;
  borderColor: string;
};

export default function AvailabilityCalendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    async function loadCalendar() {
      try {
        const res = await fetch("/api/calendar");
        const data = await res.json();

        const booked: CalendarEvent[] = data.map((event: any) => ({
          title: "",
          start: event.start,
          end: event.end,
          display: "background",
          backgroundColor: "#dc2626",
          borderColor: "#dc2626",
        }));

        setEvents(booked);
      } catch (err) {
        console.error("Kalender konnte nicht geladen werden:", err);
      }
    }

    loadCalendar();
  }, []);

  return (
    <section
      id="belegung"
      className="py-20 bg-gradient-to-b from-slate-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Live-Belegungskalender
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Die Verfügbarkeit wird automatisch mit Ferienhausmiete synchronisiert.
        </p>

        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-red-600"></div>
            <span>Belegt</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-green-600"></div>
            <span>Frei</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <FullCalendar
            plugins={[multiMonthPlugin]}
            locales={[deLocale]}
            locale="de"
            initialView="multiMonthYear"
            multiMonthMaxColumns={1}
            firstDay={1}
            height="auto"
            fixedWeekCount={false}
            displayEventTime={false}
            events={events}
            dayCellDidMount={(info) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);

              const cellDate = new Date(info.date);
              cellDate.setHours(0, 0, 0, 0);

              if (cellDate < today) {
                info.el.style.backgroundColor = "#f3f4f6";
              } else {
                info.el.style.backgroundColor = "#dcfce7";
              }
            }}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            buttonText={{
              today: "Heute",
            }}
          />

        </div>

        <div className="text-center mt-10">
          <a
            href="#kontakt"
            className="inline-block rounded-full bg-sky-600 hover:bg-sky-700 transition text-white px-8 py-4 text-lg font-semibold shadow-lg"
          >
            Jetzt Urlaub anfragen
          </a>
        </div>

      </div>
    </section>
  );
}