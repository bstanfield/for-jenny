import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getEndpoint } from '../util/calls';


const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await getEndpoint('/users');
      const { users } = await response.json();
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Role Models</title>
      </Helmet>
      <div style={{ textAlign: 'left' }}>
        <h1>Hello?</h1>
        <p>This is where Users will go :)</p>
        <ul>{users.map((user) => (<li>{user}</li>))}</ul>
      </div>
    </div>
  )
}

export default Users;
