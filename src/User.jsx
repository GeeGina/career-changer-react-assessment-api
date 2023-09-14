import React from "react";
import "./style.css";

const User = ({ isAdmin, data , removeHandle }) => {
  return (
    <>
      <table className="dataTable">
        <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          {isAdmin && <th>Action</th>}
        </tr>
        </thead>
        {data.map((member) => {
          return (
            <tbody key={member.id}>
            <tr>
              <td>{member.name}</td>
              <td>{member.lastname}</td>
              <td>{member.position}</td>
              {isAdmin && (
                <td>
                  <button className="delete" onClick={() => removeHandle(member.id)}>Delete</button>
                </td>
              )}
            </tr>
            </tbody>
          );
        })}
      </table>
      </>
  );
};

export default User;
