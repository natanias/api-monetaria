const axios = require("axios");

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/list/USD-BRL/2",
});

module.exports = api;
