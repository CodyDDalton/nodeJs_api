const axios = require("axios");
require("dotenv").config();

const apiFindService = async () =>{
    console.log("Real APIs");
    return await axios.get(`${process.env.apiFindUrlAll}`);
};

const apiFindServiceById = async (id) => {
    console.log("Real APIs by ID");
    return await axios.get(`${process.env.apiFindUrl}${id}`);
}

module.exports = { apiFindService, apiFindServiceById }