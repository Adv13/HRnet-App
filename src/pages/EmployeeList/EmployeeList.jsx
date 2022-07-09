import { useState } from "react";
import DataTable from "../../components/datatable/datatable";
import Header from "../../components/header/header";
import Input from "../../components/input/input";

function EmployeeList() {
  const [entry, setEntry] = useState(0);


  const datas = [
    {
      id: 1,
      firstName: "Alex",
      lastName: "A",
      startDate: "12/08/2021",
      department: "Department",
      dateOfBirth: "31/03/2002",
      street: "Street",
      city: "City",
      state: "State",
      zipCode: "33000",
    },
    {
      id: 2,
      firstName: "Jack",
      lastName: "B",
      startDate: "14/07/1990",
      department: "Department",
      dateOfBirth: "01/01/1968",
      street: "Street",
      city: "City",
      state: "State",
      zipCode: "75000",
    },
    {
      id: 3,
      firstName: "Suzie",
      lastName: "C",
      startDate: "12/12/2021",
      department: "Department",
      dateOfBirth: "23/12/1980",
      street: "Street",
      city: "City",
      state: "State",
      zipCode: "31000",
    },
    {
      id: 4,
      firstName: "Julia",
      lastName: "D",
      startDate: "23/09/2020",
      department: "Department",
      dateOfBirth: "24/02/1998",
      street: "Street",
      city: "City",
      state: "State",
      zipCode: "56000",
    },
  ];

  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ];

  function searchEmployee(e) {
    const target = e.target.value.toString().toLowerCase();
    console.log(target);
  }

  return (
    <div id="employee-div" className="wrapper">
      <Header title="Current Employees" link="/" linkName="Home"></Header>
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
          <Input
            id="search"
            name="Search : "
            type="text"
            onChange={searchEmployee}
          ></Input>
        </div>
        <div className="employee-table--body">
          <DataTable columns={columns} datas={datas}></DataTable>
        </div>
        <div className="employee-table--footer">
          <span>
            Showing {datas.length < 10 ? datas.length : entry} of {datas.length}{" "}
            entries
          </span>
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