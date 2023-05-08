import axios from "axios";

const baseUrl = "https://elated-gown-hen.cyclic.app";

const useAxios = axios.create({
  baseURL: baseUrl,
});

export default useAxios;
