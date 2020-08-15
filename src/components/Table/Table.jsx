import React from "react";
import UserData from "./UserData";

export default ({ data, update }) => {
  const users = data.map((user, index) => {
    return (
      <UserData
        user={user}
        index={index}
        key={`user-${index}`}
        update={update}
      />
    );
  });

  return (
    <table className="table">
      <thead>
        <tr>
          {/* <th>Photo</th> */}
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{users}</tbody>
    </table>
  );
};
