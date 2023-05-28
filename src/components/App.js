import React, { useEffect, useState } from 'react';
import BotsPage from './BotsPage';

function App() {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    async function fetchBots() {
      const response = await fetch('http://localhost:8002/bots');
      const data = await response.json();
      setBots(data);
    }
    fetchBots();
  }, []);

  return (
    <div className="App">
      <BotsPage botsCollection={bots} setBots={setBots} />
    </div>
  );
}

export default App;
