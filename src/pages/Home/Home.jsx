import Header from "../../components/header/header";
import Input from "../../components/input/input";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveEmployee} from "../../store";
import {states, department} from "../../data";
import {Dropdown} from "@adv13/my-dropdown-comp4";

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
        console.log(employeeForm);
        setIsSent(true);
      }
    
      function closeModal() {
        setIsSent(false);
      }

    return(
        <main>
            <Header
            title="HRnet"
            link="/employees"
            linkName="View Current Employees"
            ></Header>
            <div className="container">
            <h1 className="title">Create Employee</h1>
            <form action="#" className="form" id="create-employee">
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
                        <Dropdown
                            options={states}
                            defaultOption={states[0].name}
                            onChange={(state) => {
                            setEmployeeForm({
                                ...employeeForm,
                                state: state,
                                });
                            }}
                        ></Dropdown>
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
                    <label htmlFor="department" className="dept">Department</label>
                    <Dropdown
                        options={department}
                        defaultOption={department[0].name}
                        onChange={(dep) => {
                        setEmployeeForm({
                            ...employeeForm,
                            department: dep,
                        });
                        }}
                    ></Dropdown>
                </div>
            </form>

            <button onClick={saveEmployees} className="saveBtn">Save</button>
        </div>
        {isSent ? (
            <div className="blocker">
            <div id="confirmation" className="modal">
                Employee created!
                <p className="close" onClick={closeModal}>
                x
                </p>
            </div>
            </div>
        ) : null}
        </main>
    )
}

export default Home;