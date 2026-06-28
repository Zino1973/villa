import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://www.ferienhausmiete.de/4698869.ics",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("ICS konnte nicht geladen werden");
    }

    const text = await response.text();

    const events: {
      title: string;
      start: string;
      end: string;
    }[] = [];

    const regex =
      /BEGIN:VEVENT[\s\S]*?DTSTART(?:;VALUE=DATE)?:(\d{8})[\s\S]*?DTEND(?:;VALUE=DATE)?:(\d{8})[\s\S]*?END:VEVENT/g;

    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      events.push({
        title: "Belegt",
        start: `${match[1].slice(0, 4)}-${match[1].slice(4, 6)}-${match[1].slice(6, 8)}`,
        end: `${match[2].slice(0, 4)}-${match[2].slice(4, 6)}-${match[2].slice(6, 8)}`,
      });
    }

    return NextResponse.json(events, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error(error);

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