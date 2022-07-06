import Input from "../../components/input/input";
import Header from "../../components/header/header";

/**
* This function create the Home page.
*/
function App() {

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
                <label for="first-name">First Name</label>
                <input type="text" id="first-name"></input>

                <label for="last-name">Last Name</label>
                <input type="text" id="last-name"></input>

                <label for="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text"></input>

                <label for="start-date">Start Date</label>
                <input id="start-date" type="text"></input>

                <fieldset class="address">
                    <legend>Address</legend>

                    <label for="street">Street</label>
                    <input id="street" type="text"></input>

                    <label for="city">City</label>
                    <input id="city" type="text"></input>

                    <label for="state">State</label>
                    <select name="state" id="state"></select>

                    <label for="zip-code">Zip Code</label>
                    <input id="zip-code" type="number"></input>
                </fieldset>

                <label for="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

        <button>Save</button>
      </div>
    </div>
  );
}

export default App;
