import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key = 'general'pageSize={6} category={'general'} country={'in'} />} />
            <Route exact path="/general" element={<News key = 'general'pageSize={6} category={'general'} country={'in'} />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={6} category={'sports'} country={'in'} />} />
            <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={6} category={'entertainment'} country={'in'} />} />
            <Route exact path="/business" element={<News key = 'business'pageSize={6} category={'business'} country={'in'} />} />
            <Route exact path="/science" element={<News key = 'science'pageSize={6} category={'science'} country={'in'} />} />
            <Route exact path="/technology" element={<News key = 'technology'pageSize={6} category={'technology'} country={'in'} />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

