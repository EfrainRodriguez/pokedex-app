// axios
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL =
  process.env.REACT_APP_URL_API || 'https://pokeapi.co/api/v2';

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export default axiosInstance;
