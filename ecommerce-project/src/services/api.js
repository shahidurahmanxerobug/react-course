import axios from "axios";
import app from "../config/app";

const api = axios.create({
  baseURL: app.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;