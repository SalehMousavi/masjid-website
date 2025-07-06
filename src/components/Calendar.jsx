import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [events, setEvents] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchHijriCalendar();
    fetchEvents();
  }, [month, year]);

  const fetchHijriCalendar = async () => {
    try {
      const res = await axios.get('https://api.aladhan.com/v1/calendar', {
        params: {
          month,
          year,
          latitude: 43.6532,
          longitude: -79.3832,
          method: 2
        }
      });
      setCalendarData(res.data.data);
    } catch (err) {
      console.error('Failed to fetch Hijri calendar:', err);
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get('https://api.sheetbest.com/sheets/93acbc14-b391-490a-937c-843228f75c63');
      setEvents(res.data);
    } catch (err) {
      console.error('Error loading events from Google Sheets:', err);
    }
  };

  const changeMonth = (offset) => {
    const newDate = new Date(year, month - 1 + offset, 1);
    setYear(newDate.getFullYear());
    setMonth(newDate.getMonth() + 1);
    setSelectedDate(null); // clear selection on month change
  };

  const isToday = (gregDateStr) => {
    const [d, m, y] = gregDateStr.split('-').map(Number);
    const cellDate = new Date(y, m - 1, d).toDateString();
    return cellDate === new Date().toDateString();
  };

  const getEventsForDate = (gregDateStr) => {
    const [d, m, y] = gregDateStr.split('-');
    const isoDate = `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
    return events.filter((e) => e.Date === isoDate);
  };

  return (
    <section id="calendar" className="bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 sm:gap-0">
          <button
            onClick={() => changeMonth(-1)}
            className="bg-white text-green-800 px-3 py-1 rounded border hover:bg-green-100 transition"
          >
            &larr; Prev
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 text-center">
            {new Date(year, month - 1).toLocaleString('default', { month: 'long' })} {year}
          </h2>
          <button
            onClick={() => changeMonth(1)}
            className="bg-white text-green-800 px-3 py-1 rounded border hover:bg-green-100 transition"
          >
            Next &rarr;
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {calendarData.map((day, i) => {
            const gregDate = day.date.gregorian.date;
            const isCurrent = isToday(gregDate);
            const isSelected = selectedDate === gregDate;
            const dayEvents = getEventsForDate(gregDate);

            return (
              <div
                key={i}
                onClick={() => setSelectedDate(gregDate)}
                className={`border p-2 rounded shadow-sm cursor-pointer text-sm transition ${
                  isCurrent ? 'bg-yellow-100 border-yellow-500' :
                  isSelected ? 'bg-green-100 border-green-400' :
                  'bg-white'
                }`}
              >
                <div className="font-semibold">
                  {day.date.gregorian.day} {day.date.gregorian.month.en}
                </div>
                <div className="text-green-700 text-xs mb-1">
                  {day.date.hijri.day} {day.date.hijri.month.en}
                </div>

                {/* Filtered holidays */}
                {day.date.hijri.holidays.length > 0 && (
                  <ul className="text-[11px] text-blue-700 list-disc list-inside mb-1">
                    {day.date.hijri.holidays
                      .filter(h => !h.toLowerCase().match(/urs|birth|mawlid|bara'?at|ragha'?ib|miraj/))
                      .map((h, j) => <li key={j}>{h}</li>)
                    }
                  </ul>
                )}

                {/* Events from Google Sheet */}
                {dayEvents.length > 0 && (
                  <ul className="text-[11px] text-purple-700 list-disc list-inside">
                    {dayEvents.map((e, j) => (
                      <li key={j}>{e.Title}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Events section under calendar */}
        {selectedDate && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Events on {selectedDate.split('-').reverse().join('/')}
            </h3>
            <div className="space-y-4">
              {getEventsForDate(selectedDate).length > 0 ? (
                getEventsForDate(selectedDate).map((e, i) => (
                  <div key={i} className="border rounded p-4 bg-green-50 shadow-sm">
                    <h4 className="font-bold text-green-900">{e.Title}</h4>
                    <p className="text-sm text-gray-600">{e.Time}</p>
                    <p className="text-gray-800">{e.Description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No events for this date.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
