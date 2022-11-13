import './App.css';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News' ;
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state={
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  apiKey = process.env.REACT_APP_API_KEY
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={4}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key='general' pageSize={6} category={'general'} country={'in'} />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={6} category={'general'} country={'in'} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={6} category={'sports'} country={'in'} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={6} category={'entertainment'} country={'in'} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={6} category={'business'} country={'in'} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={6} category={'science'} country={'in'} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={6} category={'technology'} country={'in'} />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
}

