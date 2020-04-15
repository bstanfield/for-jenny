const getEndpoint = (endpoint) => {
  const response = fetch(`http://localhost:3002${endpoint}`, {
    method: 'GET',
  });
  return response;
};

module.exports = {
  getEndpoint,
};