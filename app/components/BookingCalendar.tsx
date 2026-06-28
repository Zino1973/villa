"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import deLocale from "@fullcalendar/core/locales/de";

export default function BookingCalendar() {
  return (
    <section
      id="kalender"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Belegungskalender
      </h2>

      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        locale={deLocale}
        height="auto"
        events={[
          {
            title: "Belegt",
            start: "2026-07-05",
            end: "2026-07-12",
            color: "#dc2626",
          },
        ]}
      />
    </section>
  );
}