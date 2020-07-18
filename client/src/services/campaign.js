import axios from "axios";
import { API_ENDPOINT } from "./config";

const ENDPOINT = API_ENDPOINT + "/campaign/all";

export const getAll = () => {
  return axios.get(`${ENDPOINT}`);
};
