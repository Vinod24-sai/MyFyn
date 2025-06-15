import React, { useState } from 'react';

const Diary = () => {
  const [entries, setEntries] = useState([]);
  const [note, setNote] = useState("");

  const addEntry = () => {
    if (note.trim()) {
      setEntries([{ text: note, date: new Date().toLocaleString() }, ...entries]);
      setNote("");
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">My Diary</h2>
      <textarea
        className="w-full border p-4 rounded mb-4"
        rows={4}
        placeholder="Write today's financial note or reflection..."
        value={note}
        onChange={e => setNote(e.target.value)}
      />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded" onClick={addEntry}>
        Add Entry
      </button>

      <div className="mt-6 space-y-4">
        {entries.map((entry, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded shadow">
            <p className="text-gray-800">{entry.text}</p>
            <span className="text-sm text-gray-500">{entry.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
