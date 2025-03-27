import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const apiRes = await fetch("https://dummyjson.com/users"); //fetches user data
      const res = await apiRes.json(); // converts raw data to json

    //This will not put the json format data in the var apiRes, json form will remain in res only
    // const apiRes =  fetch("https://dummyjson.com/users")
    //     .then((res) => res.json())

      if (res.users) {
        setUsers(res.users);
        //sets users state
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers(); //calls fetch api when page is loaded
  }, []);

  return (
    <div>
      <div>Users List</div>
      {users.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {/* this maps over every obj in array  */}
          {/* converts users array elements into jsx elements  */}
          {users.map((item) => (
            <li key={item.id}> {item.firstName}</li>
          ))}

          {/* react cannot directly print array */}
          {/* <div>{users}</div> */}

          {/* this is valid as array is converted into single string  */}
          {/* <div>{JSON.stringify(users)}</div> */}
        </div>
      )}
    </div>
  );
};

export default Users;
