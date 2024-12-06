import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Popup from "../components/Popup"; // Import the Popup component

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Helper data for BS calendar
const bsDaysInMonth = {
  normal: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  leap: [30, 32, 31, 32, 31, 30, 30, 30, 30, 30, 29, 31],
};
const bsMonthNames = [
  "Baishakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra",
];

// Helper functions
const isLeapYear = (year) => year % 4 === 0;

// Function to calculate weekday of the 1st day of a BS month
const getFirstDayOffset = (bsYear, bsMonth) => {
  const baseWeekday = 3; // Adjust this based on actual Nepali calendar logic
  const totalDays = Array.from({ length: bsYear - 2078 }, (_, i) => 2078 + i).reduce(
    (acc, year) =>
      acc +
      (isLeapYear(year) ? bsDaysInMonth.leap.reduce((a, b) => a + b) : bsDaysInMonth.normal.reduce((a, b) => a + b)),
    0
  ) + bsDaysInMonth.normal.slice(0, bsMonth - 1).reduce((a, b) => a + b, 0);

  return (baseWeekday + totalDays) % 7;
};

const BSCalendar = () => {
  const [currentDate, setCurrentDate] = useState({
    bsYear: 2080,
    bsMonth: 1,
  });
  const [calendarDays, setCalendarDays] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [folkloreData, setFolkloreData] = useState(null);

  useEffect(() => {
    generateCalendar(currentDate.bsYear, currentDate.bsMonth);
  }, [currentDate]);

  const generateCalendar = (bsYear, bsMonth) => {
    const daysInMonth =
      isLeapYear(bsYear) ? bsDaysInMonth.leap[bsMonth - 1] : bsDaysInMonth.normal[bsMonth - 1];
    const firstDayOffset = getFirstDayOffset(bsYear, bsMonth);
    setOffset(firstDayOffset);
    setCalendarDays([...Array(daysInMonth).keys()].map((day) => day + 1));
  };

  const handlePrevMonth = () => {
    if (currentDate.bsMonth === 1) {
      setCurrentDate({ bsYear: currentDate.bsYear - 1, bsMonth: 12 });
    } else {
      setCurrentDate({ ...currentDate, bsMonth: currentDate.bsMonth - 1 });
    }
  };

  const handleNextMonth = () => {
    if (currentDate.bsMonth === 12) {
      setCurrentDate({ bsYear: currentDate.bsYear + 1, bsMonth: 1 });
    } else {
      setCurrentDate({ ...currentDate, bsMonth: currentDate.bsMonth + 1 });
    }
  };

  const handleDateClick = async (day) => {
    const month = currentDate.bsMonth; // Current month
    const fetchedData = await fetchFolkloreData(month, day); // Fetch data
  
    setSelectedDate(day);
    setFolkloreData(fetchedData); // Store fetched data for Popup
  };
  
  const fetchFolkloreData = async (month, day) => {
    try {
      // Format the month and day with leading zeros
      const formattedMonth = String(month).padStart(2, '0');
      const formattedDay = String(day).padStart(2, '0');
  
      // Query to filter by month and day using the 'extract' function
      const { data, error } = await supabase
        .from("Festival")
        .select("*")
        .filter("Date", "gte", `${currentDate.bsYear}-${formattedMonth}-${formattedDay}T00:00:00Z`)  // Ensure the format is correct
        .filter("Date", "lt", `${currentDate.bsYear}-${formattedMonth}-${formattedDay}T23:59:59Z`);  // Use a range for that specific day
        console.log(formattedMonth, formattedDay);
      if (error) throw error;
  
      return data;
    } catch (err) {
      console.error("Error fetching folklore data:", err.message);
      return [];
    }
  };
  

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center">
      {/* Calendar Header */}
      <div className="flex w-[80%] justify-between items-center bg-blue-500 text-white shadow-lg p-4 rounded-lg mb-4">
        <button
          className="text-xl font-bold hover:text-teal-200 transition-colors p-2 rounded-full hover:bg-blue-400"
          onClick={handlePrevMonth} // Correct function reference
        >
          ← Previous
        </button>
        <h2 className="text-3xl font-extrabold">
          {bsMonthNames[currentDate.bsMonth - 1]} {currentDate.bsYear}
        </h2>
        <button
          className="text-xl font-bold hover:text-teal-200 transition-colors p-2 rounded-full hover:bg-teal-600"
          onClick={handleNextMonth}
        >
          Next →
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg mx-4 w-[80%] h-2/4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold text-teal-600 opacity-80">
            {day}
          </div>
        ))}
        {Array.from({ length: offset }).map((_, idx) => (
          <div key={idx} className="p-3 bg-gray-100 rounded"></div>
        ))}
        {calendarDays.map((day) => (
          <div
            key={day}
            onClick={() => handleDateClick(day)}
            className="p-4 border border-teal-300 rounded-lg text-teal-800 
                       font-semibold cursor-pointer 
                       hover:bg-teal-100 hover:shadow-md 
                       transition-all duration-200 
                       relative group"
          >
            {day}
            <span
              className="absolute top-1 right-1 text-teal-500 
                         opacity-0 group-hover:opacity-100 
                         transition-opacity duration-200 
                         text-xs"
            >
              ℹ️
            </span>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedDate && (
        <Popup
          date={selectedDate}
          month={bsMonthNames[currentDate.bsMonth - 1]}
          year={currentDate.bsYear}
          folkloreData={folkloreData} // Pass the fetched folklore data to Popup
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
};

export default BSCalendar;
