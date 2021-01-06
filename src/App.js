import React from 'react';
import './App.css';
import SongOverview from './components/SongOverview';
import { SongProvider } from './context/useContext';

function App() {
  return (
    <div className="App">
      <SongProvider>
        <SongOverview />
      </SongProvider>
    </div>
  );
}

export default App;
