import axios from "axios";

export const axiosSecure = axios.create({
//   baseURL: "https://12-server-nine.vercel.app",
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
    return axiosSecure
};

export default UseAxiosSecure;