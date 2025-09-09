import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/button';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://sr-groot.duckdns.org/api/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="App">
      <div className="px-8 sm:px-18">
        <nav className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-blue-600">Sylvan Groot</div>
          <div>
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </div>
        </nav>
        <h1 className='text-4xl font-bold text-blue-600 mt-8'>Backend data:</h1>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default App;
