import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './views';
import './App.css';
import Dashboard from './views/Dashboard';
import Test from './components/Test';
import { useCookies } from 'react-cookie';

function App() {

  const [cookies, setCookies] = useCookies(['google_token']);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index cookies={cookies} setCookies={setCookies} />} />
          <Route path='/test' element={<Test cookies={cookies} setCookies={setCookies}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
