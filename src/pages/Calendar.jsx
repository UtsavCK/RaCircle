import React, { useState, useEffect } from "react";

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
  // Simplified logic: approximate the weekday (needs refinement for real-world BS calendars)
  const baseWeekday = 3; // Example: Assuming 1st Baishakh, 2078, starts on Thursday (4)
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

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button
          className="text-gray-600 font-semibold hover:text-gray-800"
          onClick={handlePrevMonth}
        >
          &lt; Prev
        </button>
        <h2 className="text-lg font-bold">
          {bsMonthNames[currentDate.bsMonth - 1]} {currentDate.bsYear}
        </h2>
        <button
          className="text-gray-600 font-semibold hover:text-gray-800"
          onClick={handleNextMonth}
        >
          Next &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {Array.from({ length: offset }).map((_, idx) => (
          <div key={idx} className="p-2 border rounded bg-gray-100"></div>
        ))}
        {calendarDays.map((day) => (
          <div
            key={day}
            className="p-2 border rounded text-gray-700 hover:bg-gray-200"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BSCalendar;
