import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Format from './PongalTheme/Format';
import Kolam from './PongalTheme/Kolam';
import Dance from './PongalTheme/Dance';
import Pongal from './PongalTheme/Pongal';
import BPongal from './PongalTheme/BPongal';
import SPongal from './PongalTheme/SPongal';
import MPongal from './PongalTheme/MPongal';
import KPongal from './PongalTheme/KPongal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Format />}>
              <Route index element={<Pongal />} />
              <Route path="pongal" element={<Pongal />} />
              <Route path="kolam" element={<Kolam />} />
              <Route path="dance" element={<Dance />} />
              <Route path="bpongal" element={<BPongal />} />
              <Route path="spongal" element={<SPongal />} />
              <Route path="mpongal" element={<MPongal />} />
              <Route path="kpongal" element={<KPongal />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

