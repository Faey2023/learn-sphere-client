import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetUsers = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [users, refetch];
};

export default useGetUsers;
