import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/layout/navbar';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
