import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
    <Navbar title="NewsApp"/>
      <Routes>
      <Route exact path="/" element={<News key="general" category="General" pageSize='6'/>} />
        <Route exact path="/entertainment" element={<News key="entertainment" category="Entertainment" pageSize='6'/>} />
        <Route exact path="/entertainment" element={<News key="business" category="business" pageSize='6'/>} />
        <Route exact path="/health" element={<News key="health" category="Health" pageSize='6'/>} />
        <Route exact path="/science" element={<News key="science" category="Science" pageSize='6'/>} />
        <Route exact path="/sports" element={<News key="sports" category="Sports" pageSize='6'/>} />
        <Route exact path="/technology" element={<News key="technology" category="Technology" pageSize='6'/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
