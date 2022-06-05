import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const loginAPI = (data) => {
  return axios.post('http://localhost:4000/login', data);
};

export const useLogin = () => {
  return useMutation(loginAPI);
};
