import UseAxiosPublic from "../hooks/UseAxiosPublic";
const axiosPublic = UseAxiosPublic();

export const saveUserInDB = async (user) => {
  const currentUser = {
    email: user?.email,
    name: user?.displayName,
    image: user?.photoURL,
    role: "student",
    status: "verified",
  };
  const { data } = axiosPublic.put(`/users/${user?.email}`, currentUser);
  return data;
};
