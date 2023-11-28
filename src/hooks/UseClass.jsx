import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseClass = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/class");
      return res.data;
    },
  });
  return [classes, refetch];
};

export default UseClass;
