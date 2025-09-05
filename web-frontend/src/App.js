import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h1>Backend data:</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
