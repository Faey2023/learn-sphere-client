import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

const useTeacher = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isTeacher } = useQuery({
    queryKey: [user?.email, "isTeacher"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teachers/${user.email}`);
      return res.data?.instructor;
    },
  });
  return [isTeacher];
};

export default useTeacher;
