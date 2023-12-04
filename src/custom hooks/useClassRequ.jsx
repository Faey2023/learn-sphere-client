import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../hooks/UseAxiosSecure";


const useClassRequ = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: classRequ = [], refetch } = useQuery({
      queryKey: ["classrequ"],
      queryFn: async () => {
        const res = await axiosSecure.get("/classrequ");
        return res.data;
      },
    });
    return [classRequ, refetch];
  };

export default useClassRequ;