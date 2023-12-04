import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import useAuth from "./useAuth";


const useStudent = () => {
    const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isStudent } = useQuery({
    queryKey: [user?.email, "isStudent"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data?.student;
    },
  });
  return [isStudent];
};

export default useStudent;