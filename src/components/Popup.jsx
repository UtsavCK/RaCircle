import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase Client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Replace with your Supabase URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY; // Replace with your Supabase Key
const supabase = createClient(supabaseUrl, supabaseKey);

const nepaliMonths = {
  Baishakh: 1,
  Jestha: 2,
  Ashadh: 3,
  Shrawan: 4,
  Bhadra: 5,
  Ashwin: 6,
  Kartik: 7,
  Mangsir: 8,
  Poush: 9,
  Magh: 10,
  Falgun: 11,
  Chaitra: 12,
};

const DateDetailsPopup = ({ date, month, year, onClose }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFolkloreData = async () => {
      setLoading(true);

      // Adjust Nepali calendar date
      let adjustedMonth = nepaliMonths[month];
      let adjustedYear = year;
      let adjustedDate = date;

      if (date < 15) {
        adjustedMonth -= 1;
        adjustedDate = 15 + date;
      }
      if (adjustedMonth < 9) {
        adjustedMonth += 3;
        adjustedYear -= 1;
      }

      const formattedDate = `${adjustedYear}-${String(adjustedMonth).padStart(2, '0')}-${String(adjustedDate).padStart(2, '0')}`;

      try {
        const { data, error } = await supabase
          .from('Festival')
          .select('*')
          .eq('Date', formattedDate);

        if (error) throw error;

        setEvents(data || []);
      } catch (err) {
        console.error('Error fetching folklore data:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFolkloreData();
  }, [date, month, year]);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-96 p-6 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          ✕
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-blue-100 p-4 rounded-xl">
            <span className="text-2xl">📅</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-blue-900">
              {`${String(date).padStart(2, '0')} ${month}, ${year}`}
            </h2>
            <p className="text-gray-500">Nepali Calendar Date</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-800 border-b pb-2">
            Folklore & Events
          </h3>
          {loading ? (
            <p className="text-gray-500 text-center">Loading...</p>
          ) : events.length > 0 ? (
            events.map((event, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div className="text-2xl">{event.emoji || '📖'}</div>
                <div>
                  <h4 className="font-bold text-blue-900">{event.title}</h4>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No folklore events for this date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateDetailsPopup;
