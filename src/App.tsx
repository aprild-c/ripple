import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import BookSpace from "./pages/bookSpace/BookSpace";
import Vision from "./pages/vision/Vision";
import Services from "./pages/services/Services";

function App() {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/book_space' element={<BookSpace/>} />
            <Route path='/vision' element={<Vision/>} />
            <Route path='/services' element={<Services/>} />
        </Routes>
      </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Your mom should Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
