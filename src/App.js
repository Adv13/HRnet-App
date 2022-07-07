import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from './components/error/error'
import Home from './pages/Home/Home'
//import EmployeeList from './pages/EmployeeList/EmployeeList'
/**
* This function contains the routing part of the website for the navigation.
*/
function App(){
return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/employees" element={<EmployeeList />} /> */}
      <Route path="/*" element={<Error />} />
    </Routes>
  </BrowserRouter>)
}

export default App;