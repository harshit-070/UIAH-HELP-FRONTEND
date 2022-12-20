import axios from "axios";
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEBLOCKCHAIN,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
export default instance;
export const META_URL = process.env.REACT_APP_BLOCKCHAIN;
