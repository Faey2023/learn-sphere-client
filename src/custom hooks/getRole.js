import UseAxiosSecure from "../hooks/UseAxiosSecure";

export const getRole = async (email) => {
  const axiosSecure = UseAxiosSecure();
  const { data } = await axiosSecure.get(`/user/${email}`);
  return data;
};
