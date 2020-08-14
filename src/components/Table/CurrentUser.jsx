import React from "react";

export default ({ data, active }) => {
  if (!data || !data[active]) {
    return <h3>Ничего не найдено :(</h3>;
  }

  const user = data[active];

  return (
    <div>
      <div>
        <h3>{user.firstName} {user.lastName}</h3>
        <table className="table">
          <tbody>
              {/* <td>Photo</td>
              <td>{styles.userPhoto}</td> */}
            <tr>
              <td>ID</td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>Last Name: </td>
              <td>{user.lastName}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Phone: </td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
};
