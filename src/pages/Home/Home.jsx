import Input from "../../components/input/input";
import Header from "../../components/header/header";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { saveEmployee } from "../../store";
import { states, department } from "../../data";

/**
* This function create the Home page.
*/
function App() {
  const [isSent, setIsSent] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    startDate: "",
    department: "",
    dateOfBirth: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const dispatch = useDispatch();

  function saveEmployees() {
    dispatch(saveEmployee(employeeForm));
    setIsSent(true);
  }

  function closeModal() {
    setIsSent(false);
  }

  return (
    <div className="app">
      <Header
        title="HRnet"
        link="/employees"
        linkName="View Current Employees"
      ></Header>
      <div className="container">
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <div className="info">
            <Input
              onChange={(firstName) => {
                setEmployeeForm({
                  ...employeeForm,
                  firstName: firstName.currentTarget.value,
                });
              }}
              id="first-name"
              name="First Name"
              type="text"
            ></Input>
            <Input
              onChange={(lastName) => {
                setEmployeeForm({
                  ...employeeForm,
                  lastName: lastName.currentTarget.value,
                });
              }}
              id="last-name"
              name="Last Name"
              type="text"
            ></Input>
            <Input
              onChange={(dateOfBirth) => {
                setEmployeeForm({
                  ...employeeForm,
                  dateOfBirth: dateOfBirth.currentTarget.value,
                });
              }}
              id="date-of-birth"
              name="Date of Birth"
              type="date"
            ></Input>
            <Input
              onChange={(startDate) => {
                setEmployeeForm({
                  ...employeeForm,
                  startDate: startDate.currentTarget.value,
                });
              }}
              id="start-date"
              name="Start Date"
              type="date"
            ></Input>
          </div>

          <fieldset className="address">
            <legend>Address</legend>

            <Input
              onChange={(street) => {
                setEmployeeForm({
                  ...employeeForm,
                  street: street.currentTarget.value,
                });
              }}
              className="address--element"
              id="street"
              name="Street"
              type="text"
            ></Input>
            <Input
              onChange={(city) => {
                setEmployeeForm({
                  ...employeeForm,
                  city: city.currentTarget.value,
                });
              }}
              className="address--element"
              id="city"
              name="City"
              type="text"
            ></Input>
            <div className="address--element">
              <label htmlFor="state">State</label>
              <div className="dropdown"
                options={states}
                defaultOption="Please select a state"
                onChange={(state) => {
                  setEmployeeForm({
                    ...employeeForm,
                    state: state,
                  });
                }}
              ></div>
            </div>
            <Input
              onChange={(zipCode) => {
                setEmployeeForm({
                  ...employeeForm,
                  zipCode: zipCode.currentTarget.value,
                });
              }}
              className="address--element"
              id="zip-code"
              name="Zip Code"
              type="number"
            ></Input>
          </fieldset>

          <label htmlFor="department">Department</label>
          <div className="dropdown"
            options={department}
            defaultOption="Please select a department"
            onChange={(dep) => {
              setEmployeeForm({
                ...employeeForm,
                department: dep,
              });
            }}
          ></div>
        </form>

        <button onClick={saveEmployees}>Save</button>
      </div>
      {isSent ? (
        <div className="blocker">
          <div id="confirmation" className="modal">
            Employee Created!
            <p className="close" onClick={closeModal}>
              x
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
