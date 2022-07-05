import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Error from './components/error/error'
import Home from './pages/Home/Home'
import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import EmployeeList from './pages/EmployeeList/EmployeeList'
/**
* This function contains the routing part of the website for the navigation.
*/
function App(){
return(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employee" element={<CreateEmployee />} />
      <Route path="/employeelist" element={<EmployeeList />} />
      <Route path="/*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>)
}

export default App;