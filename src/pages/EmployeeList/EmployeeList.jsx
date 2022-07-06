import React from "react";
import { Link,NavLink } from "react-router-dom";
import { useState } from "react";
import DataTable from "../../components/datatable/datatable";
import Header from "../../components/header/header";
import Input from "../../components/input/input";
/**
* This function create the EmployeeList page.
*/
function EmployeeList() {
      
        return (
          <div id="employee-div" className="wrapper">
            <Header title="Current Employees" link="/employees" linkName="Home"></Header>
            <div className="employee-table">
              <div className="employee-table--header">
                <div>
                  Show{" "}
                  <select>
                    <option value="10">10</option>
                    <option value="20">20</option>
                  </select>{" "}
                  entries
                </div>
                <Input id="search" name="Search : " type="text"></Input>
              </div>
              <div className="employee-table--body">
                <DataTable></DataTable>
              </div>
              <div className="employee-table--footer">
                {/* <span>
                  Showing {currentEntry} of {entry} entries
                </span> */}
                <div>
                  <button className="previous">Previous</button>
                  <button className="page-number">1</button>
                  <button className="next">Next</button>
                </div>
              </div>
            </div>
          </div>
      );
  }
   
  export default EmployeeList;