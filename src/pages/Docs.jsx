import React, { useState } from 'react';

const Docs = () => {
  const [docs, setDocs] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (file && name) {
      setDocs([...docs, { name, fileURL: URL.createObjectURL(file) }]);
      setName("");
      setFile(null);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Uploaded Documents</h2>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Document name"
          className="border p-2 rounded w-1/3"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="file"
          accept=".pdf,.jpg,.png"
          className="border p-2 rounded w-1/3"
          onChange={e => setFile(e.target.files[0])}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {docs.map((doc, idx) => (
          <div key={idx} className="bg-white p-4 shadow rounded hover:shadow-lg">
            <h4 className="text-lg font-semibold mb-2">{doc.name}</h4>
            <a href={doc.fileURL} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              View File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docs;
