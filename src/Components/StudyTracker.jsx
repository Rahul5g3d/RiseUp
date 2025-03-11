import React, { useState, useEffect } from "react";

const StudyTracker = () => {
  const [hours, setHours] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords =
      JSON.parse(localStorage.getItem("studyRecords")) || [];
    setRecords(storedRecords);
  }, []);

  const fetchDate = async () => {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    const data = await response.json();
    return data.datetime.split("T")[0];
  };

  const addRecord = async () => {
    if (!hours) return;
    const date = await fetchDate();
    const newRecord = { date, hours: parseFloat(hours) };
    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);
    localStorage.setItem("studyRecords", JSON.stringify(updatedRecords));
    setHours("");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Daily Study Tracker</h2>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        placeholder="Hours studied today"
        className="border p-2 w-full rounded"
      />
      <button
        onClick={addRecord}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Add Record
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Study History</h3>
        <ul className="mt-2">
          {records.map((record, index) => (
            <li key={index} className="border-b py-2">
              {record.date}:{" "}
              <span className="font-bold">{record.hours} hrs</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyTracker;
