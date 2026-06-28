import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://www.ferienhausmiete.de/4698869.ics",
      {
        cache: "no-store",
      }
    );

    const text = await response.text();

    const events = [];

    const regex =
      /BEGIN:VEVENT[\s\S]*?DTSTART.*?:(\d{8})[\s\S]*?DTEND.*?:(\d{8})[\s\S]*?END:VEVENT/g;

    let match;

    while ((match = regex.exec(text)) !== null) {
      events.push({
        title: "Belegt",
        start:
          match[1].substring(0, 4) +
          "-" +
          match[1].substring(4, 6) +
          "-" +
          match[1].substring(6, 8),

        end:
          match[2].substring(0, 4) +
          "-" +
          match[2].substring(4, 6) +
          "-" +
          match[2].substring(6, 8),
      });
    }

    return NextResponse.json(events);
  } catch {
    return NextResponse.json(
      {
        error: "Kalender konnte nicht geladen werden",
      },
      {
        status: 500,
      }
    );
  }
}