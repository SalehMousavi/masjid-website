import { useEffect, useState } from "react";
import axios from "axios";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("https://api.sheetbest.com/sheets/93acbc14-b391-490a-937c-843228f75c63");
        setEvents(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section id="events" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">Upcoming Events</h2>
        {events.length > 0 ? (
          <ul className="space-y-6">
            {events.slice(0, 5).map((event, index) => (
            <li
                key={index}
                className="border rounded-lg shadow-sm p-4 text-left bg-green-50"
            >
                <h3 className="text-xl font-bold text-green-900">{event.Title}</h3>
                <p className="text-sm text-gray-600">
                {event.Date} at {event.Time}
                </p>
                <p className="text-gray-800 mt-1">{event.Description}</p>
            </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming events yet.</p>
        )}
      </div>
    </section>
  );
}
