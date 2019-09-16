import React from 'react';
import './App.css';

import {CIHeader,CIGrid} from './components/CIExporter.js';

function App() {
  return (
    <div className="App">
      <CIHeader location="London"/>
      <CIGrid/>
    </div>
  );
}

export default App;
