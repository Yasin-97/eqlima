import axios from "axios";

import { BASE_API_URL } from "./checkEnv";

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});
