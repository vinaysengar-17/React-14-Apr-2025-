import axios from "axios";
import React, { useEffect, useState } from "react";

const Pr4 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result);
      console.log(result.data);
      setUsers(result.data);
    }
    getData();
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">User List</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{`street is : ${user.address.street} city is :  ${user.address.city}zipcode is :  ${user.address.zipcode}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pr4;
