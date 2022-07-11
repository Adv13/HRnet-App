import PropTypes from 'prop-types';

function Tbody({ tableData, columns }) {
    function addClassname(id) {
      let value = "";
  
      if (id % 2 === 0) {
        value = "even";
      } else {
        value = "odd";
      }
      return value;
    }
  
    return (
      <tbody>
        {tableData.map((data, index) => (
        <tr key={index} role="row" className={addClassname(index)}>
            <td className="sorting_1">{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.startDate}</td>
            <td>{data.department}</td>
            <td>{data.dateOfBirth}</td>
            <td>{data.street}</td>
            <td>{data.city}</td>
            <td>{data.state}</td>
            <td>{data.zipCode}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  Tbody.propTypes = {
    tableData: PropTypes.array,
    columns: PropTypes.array,
  };
  
  export default Tbody;