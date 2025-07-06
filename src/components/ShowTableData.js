import React from "react";
import "./ShowTableData.css";

const checkForArray = (a) => {
  return (
    typeof a !== "undefined" && a !== "" && Array.isArray(a) && a.length > 0
  );
};

export default function ShowTableData(props) {
  const { tableData, handleCheck } = props;

  const tableHeader = checkForArray(tableData)
    ? Object.keys(tableData[0])
        .filter((item) => item != "id")
        .map((item) => item.toUpperCase())
    : "";

  return (
    <div>
        {checkForArray(tableData) ? props.children : ''}
      {checkForArray(tableData) ? (
        <table>
          <thead>
            <tr>
              <th>Completed</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleCheck(item.id)}
                  />
                </td>
                <td style={item.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Your task list is empty</p>
      )}
    </div>
  );
}
