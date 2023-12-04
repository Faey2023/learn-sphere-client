import { useQuery } from "@tanstack/react-query";
// import UseAxiosSecure from "./UseAxiosSecure";
import { getRole } from "../cutom hooks/GetRole";
import useAuth from "../custom hooks/useAuth";

const UseTotalUsers = () => {
  // const axiosSecure = UseAxiosSecure();
  const { user, loading } = useAuth();
  const {
    data: role,
    isLoading,
    // refetch,
  } = useQuery({
    enable: !loading && !!user?.email,
    queryKey: ["role"],
    queryFn: async () => getRole(user?.email),
  });
  return [role, isLoading];
};

export default UseTotalUsers;
