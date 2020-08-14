import React from "react";

export default ({ user, update, index }) => {
  return (
    <tr key={user.id} onClick={() => update({ active: index })}>
      {/* <td><img src={styles.userPhoto}></img></td> */}
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
};
