import axios from "axios";

const axiosSecure = axios.create({
  //   baseURL: "https://12-server-nine.vercel.app",
  baseURL: "https://12-server-nine.vercel.app",
});

const UseAxiosSecure = () => {
  return axiosSecure;
};

export default UseAxiosSecure;
