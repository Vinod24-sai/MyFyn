import React, { useState } from 'react';

const Liabilities = () => {
  const [liabilities, setLiabilities] = useState([]);
  const [form, setForm] = useState({ type: "", amount: "", due: "" });

  const addLiability = () => {
    setLiabilities([...liabilities, { ...form }]);
    setForm({ type: "", amount: "", due: "" });
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Liabilities</h2>
      <div className="bg-white rounded p-4 shadow mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            className="border p-2 rounded"
            placeholder="Type (e.g., Loan)"
            value={form.type}
            onChange={e => setForm({ ...form, type: e.target.value })}
          />
          <input
            type="number"
            className="border p-2 rounded"
            placeholder="Amount"
            value={form.amount}
            onChange={e => setForm({ ...form, amount: e.target.value })}
          />
          <input
            type="date"
            className="border p-2 rounded"
            value={form.due}
            onChange={e => setForm({ ...form, due: e.target.value })}
          />
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded" onClick={addLiability}>
          Add Liability
        </button>
      </div>

      <div className="grid gap-4">
        {liabilities.map((item, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <h4 className="text-lg font-semibold">{item.type}</h4>
            <p>Amount: ₹{item.amount}</p>
            <p>Due Date: {item.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liabilities;
