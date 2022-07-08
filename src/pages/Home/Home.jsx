import Header from "../../components/header/header";
import Input from "../../components/input/input";
import {useState} from "react";
import {useDispatch} from "react-redux";
import { saveEmployee } from "../../store";
import { states, department } from "../../data";

function Home(){

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

    return(
        <main>
            <Header/>
            <div class="container">
            <h1 className="title">Create Employee</h1>
            <div className="info">
                <form action="#" className="form" id="create-employee">
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
                </form>
            </div>
            
            <form>
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
                        <div
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
                <div className="department">
                    <label for="department" className="dept">Department</label>
                    <select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </div>
            </form>

            <button onclick="saveEmployee()" className="saveBtn">Save</button>
        </div>
        <div id="confirmation" class="modal">Employee Created!</div>
        </main>
    )
}

export default Home;