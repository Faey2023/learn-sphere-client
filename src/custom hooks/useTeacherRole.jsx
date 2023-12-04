import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import useAuth from "./useAuth";

const useTeacherRole = () => {
    const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const { data: userT = [], refetch } = useQuery({
    queryKey: ["userT"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/teachers/${user.email}`);
      return res.data;
    },
  });
  return [userT, refetch];
};

export default useTeacherRole;