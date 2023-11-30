import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";


const UseTeacherRequest = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: teachers = [], refetch } = useQuery({
      queryKey: ["teachers"],
      queryFn: async () => {
        const res = await axiosSecure.get("/teachers");
        return res.data;
      },
    });
    return [teachers, refetch];
};

export default UseTeacherRequest;

// Name
// ● Images(who apply for teacher)
// ● experience
// ● Title
// ● category
// ● status(pending)
// ● Approved button
// ● Reject button
