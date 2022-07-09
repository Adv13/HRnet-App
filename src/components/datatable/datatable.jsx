import { useState } from "react";
import { datas, states, department } from "../../data";
import Thead from "../thead/thead";
import Tbody from "../tbody/tbody";

function DataTable({ datas, columns }) {


  return (
    <table className="data-table">
      <Thead columns={columns}></Thead>
      <Tbody datas={datas}></Tbody>
    </table>
  );
}

export default DataTable;