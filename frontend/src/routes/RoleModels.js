import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { getEndpoint } from '../util/calls';


const RoleModels = () => {
  const [roleModels, setRoleModels] = useState([]);
  useEffect(() => {
    const getRoleModels = async () => {
      const response = await getEndpoint('/role-models');
      const { role_models } = await response.json();
      setRoleModels(role_models);
    };
    getRoleModels();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Role Models</title>
      </Helmet>
      <div style={{ textAlign: 'left' }}>
        <h1>Hello?</h1>
        <p>This is where Role Models will go :)</p>
        <ul>{roleModels.map((name) => (<li>{name}</li>))}</ul>
      </div>
    </div>
  )
}

export default RoleModels;
