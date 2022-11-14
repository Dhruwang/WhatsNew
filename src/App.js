import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import News from './components/News' ;
import LoadingBar from 'react-top-loading-bar'



const App =()=> {
  const [progress, setprogress] = useState(0)
  const [theme,setTheme] = useState('light')
  var col = document.getElementById("mainHeading");
  const enableDarkMode =()=>{
      document.body.style.background = 'black';
      col.style.color="white";
      setTheme('dark')
    }
  const setProgress=(progress)=>{
    setprogress(progress)
  }
  
  const apiKey=process.env.REACT_APP_API_KEY
    return (
      <div>
        <BrowserRouter>
          <Navbar sticky='top' enableDarkMode={enableDarkMode}/>
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={4}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={6} category={'general'} country={'in'} />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='general' pageSize={6} category={'general'} country={'in'} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} category={'sports'} country={'in'} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} category={'entertainment'} country={'in'} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='business' pageSize={6} category={'business'} country={'in'} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={6} category={'science'} country={'in'} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={6} category={'technology'} country={'in'} />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
}

export default App