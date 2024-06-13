import React, { useState } from 'react';

const WorkOnUrls = () => {
  const [apiBaseUrl, setApiBaseUrl] = useState('https://api3-1-mams.onrender.com/');
  const [endpoint, setEndpoint] = useState('');
  const [httpMethod, setHttpMethod] = useState('GET');
  const [requestData, setRequestData] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${apiBaseUrl}${endpoint}`;
    
    const options = {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestData ? JSON.stringify(JSON.parse(requestData)) : null,
    };

    if (httpMethod === 'GET' || httpMethod === 'DELETE') {
      delete options.body;
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Admin Section</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">API Base URL</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={apiBaseUrl}
            onChange={(e) => setApiBaseUrl(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Endpoint</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">HTTP Method</label>
          <select
            className="w-full px-3 py-2 border rounded"
            value={httpMethod}
            onChange={(e) => setHttpMethod(e.target.value)}
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
        </div>
        {(httpMethod === 'POST' || httpMethod === 'PUT') && (
          <div className="mb-4">
            <label className="block text-gray-700">Request Data</label>
            <textarea
              className="w-full px-3 py-2 border rounded"
              value={requestData}
              onChange={(e) => setRequestData(e.target.value)}
              rows="5"
            ></textarea>
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Send Request
        </button>
      </form>
      {response && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Response</h3>
          <pre className="bg-gray-100 p-4 rounded">{response}</pre>
        </div>
      )}
    </div>
  );
};

export default WorkOnUrls;
