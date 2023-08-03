import axios from "axios";
import { BASE_URL } from "./apiUrls";

axios.defaults.baseURL = BASE_URL;
//axios.defaults.baseURL = 'http://localhost:3004';

const createHeader = (_URL: string, options = {}) => {
  let header = {
    Accept: "/",
    Authorization: "Bearer " + localStorage.getItem("accessToken"),
  };
  options = { ...options, headers: header };
  return { URL: _URL, options: options };
};

const POST = (_URL: string, data = {}, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.post(URL, data, options);
};

const GET = (_URL: string, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.get(URL, options);
};

const PATCH = (_URL: string, data: any, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.patch(URL, data, options);
};

const DELETE = (_URL: string, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.delete(URL, options);
};

const GET_AUTH_TOKEN = () => {
  return localStorage.getItem("accessToken");
};

export { POST, GET, PATCH, DELETE, GET_AUTH_TOKEN };
