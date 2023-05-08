import axios from "axios";

const baseUrl = "www.ice-server.anupat-dav.com";

const useAxios = axios.create({
  baseURL: baseUrl,
});

export default useAxios;
