import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function IslamicCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hijriDate, setHijriDate] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchHijriDate(selectedDate);
    fetchEvents();
  }, [selectedDate]);

  const fetchHijriDate = async (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    try {
      const res = await axios.get("https://api.aladhan.com/v1/gToH", {
        params: { day, month, year },
      });
      setHijriDate(res.data.data.hijri);
    } catch (error) {
      console.error("Failed to fetch Hijri date:", error);
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://api.sheetbest.com/sheets/93acbc14-b391-490a-937c-843228f75c63");
      setEvents(res.data);
    } catch (error) {
      console.error("Error loading events:", error);
    }
  };

  const eventsOnDate = events.filter(
    (e) => new Date(e.Date).toDateString() === selectedDate.toDateString()
  );

  return (
    <section id="calendar" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800 mb-6">Islamic Calendar</h2>

        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="mx-auto mb-4"
        />

        <div className="mb-4 text-lg text-gray-800">
          <p>
            <strong>Gregorian:</strong> {selectedDate.toDateString()}
          </p>
          {hijriDate && (
            <p>
              <strong>Hijri:</strong> {hijriDate.day} {hijriDate.month.en} {hijriDate.year} AH
            </p>
          )}
        </div>

        <div className="text-left space-y-4">
          {eventsOnDate.length > 0 ? (
            eventsOnDate.map((event, i) => (
              <div key={i} className="border p-4 rounded-lg bg-green-50 shadow-sm">
                <h3 className="text-xl font-bold text-green-900">{event.Title}</h3>
                <p className="text-sm text-gray-600">
                  {event.Date} at {event.Time}
                </p>
                <p className="text-gray-800">{event.Description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No events on this date.</p>
          )}
        </div>
      </div>
    </section>
  );
}
