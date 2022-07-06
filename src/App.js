import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from './components/error/error'
import Home from './pages/Home/Home'
import EmployeeList from './pages/EmployeeList/EmployeeList'
/**
* This function contains the routing part of the website for the navigation.
*/
function App(){
return(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </Router>)
}

export default App;