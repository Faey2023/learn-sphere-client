import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import useAuth from "./useAuth";

const useGetRole = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const { data: userS = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`);
      return res.data;
    },
  });
  return [userS, refetch];
};

export default useGetRole;
