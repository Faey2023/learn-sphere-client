import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

const useApi = () => {
  const axiosSecure = UseAxiosSecure();
  const [refetch, isLoading, data] = useQuery({
    queryKey: ["users", data],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
  return [refetch, isLoading, data];
};

export default useApi;
