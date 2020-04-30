import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: 'https://api.ejcomp.com.br'
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const baseURL = process.env.API_URL;
export {api, baseURL};
