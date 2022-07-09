function Thead({ columns }) {
    return (
      <thead>
        <tr role="row">
          {columns.map((column) => (
            <th
              key={column.data}
              className="sorting"
              tabIndex="0"
              aria-controls="employee-table"
              rowSpan="1"
              colSpan="1"
            >
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
  
  export default Thead;