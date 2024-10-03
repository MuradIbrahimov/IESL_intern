import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/age-gender-data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Age and Gender Data</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.gender}</td>
              <td>{item.age}</td>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
