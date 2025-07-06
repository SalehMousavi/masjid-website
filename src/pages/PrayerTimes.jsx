import { useEffect, useState } from "react";
import axios from "axios";

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const res = await axios.get("https://api.aladhan.com/v1/timingsByCity", {
          params: {
            city: "Keswick",
            country: "Canada",
            method: 1, // ISNA
          },
        });
        setPrayerTimes(res.data.data.timings);
      } catch (err) {
        console.error("Error fetching prayer times:", err);
      }
    };

    fetchTimes();
  }, []);

  return (
    <section id="prayer" className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-green-800 mb-6">
          Today's Prayer Times
        </h2>

        {prayerTimes ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-base sm:text-lg font-medium">
            {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((name) => (
              <div key={name} className="bg-green-50 rounded-lg shadow p-4">
                <h3 className="text-green-700 text-sm sm:text-base mb-1">{name}</h3>
                <p>{prayerTimes[name]}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Loading prayer times...</p>
        )}
      </div>
    </section>
  );
}
