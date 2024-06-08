module.exports = (response, data) => {
  response.statusCode = 200;
  response.setHeader("content-type", "application/json");

  let responseData = {
    status: 200,
    message: "Successfully Get the network request",
    data:JSON.parse(data)
  };

  response.write(JSON.stringify(responseData));
  response.end();
};
