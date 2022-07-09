function Tbody({ datas }) {
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
        {datas.map((data) => (
          <tr key={data.id} role="row" className={addClassname(data.id)}>
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
  
  export default Tbody;