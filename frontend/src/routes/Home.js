import React from 'react';
import { Helmet } from 'react-helmet';


const Home = () => (
  <div>
    <Helmet>
      <title>Role Models</title>
    </Helmet>
    <div>
      <h1>Home is where the heart is...</h1>
      <p>And also '/' in the URL</p>
    </div>
  </div>
);

export default Home;
