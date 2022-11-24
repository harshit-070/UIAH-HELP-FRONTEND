import axios from "axios";
const instance = axios.create({
  baseURL: "https://cert-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
export default instance;
export const META_URL =
  "https://cert-api.herokuapp.com/displaygraduatedataroute/displaygraduatedata/";
