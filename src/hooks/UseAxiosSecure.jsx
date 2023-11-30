import axios from "axios";

const axiosSecure = axios.create({
    // baseURL: "http://localhost:5000",
  baseURL: "https://12-server-nine.vercel.app",
});

const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
