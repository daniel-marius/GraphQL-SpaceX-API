const axios = require("axios");

module.exports = axios.create({
  baseURL: "https://api.spacexdata.com/v3",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});
