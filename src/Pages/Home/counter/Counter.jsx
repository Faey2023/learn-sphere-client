import classAnimation from "../../../assets/data/classAnimation.json";
import Lottie from "lottie-react";
import UseClass from "../../../hooks/UseClass";
import CountUp from "react-countup";
import useGetUsers from "../../../custom hooks/useGetUsers";

const Counter = () => {
  const [classes] = UseClass();
  const [users] = useGetUsers();
  console.log(classes.length);
  return (
    <>
      <div className="flex">
        <div className="flex flex-col md:flex-row flex-1 justify-center text-center items-center gap-5">
          <div className="text-4xl font-bold border p-5">
            <h1>Number of classes</h1>
            <CountUp end={classes.length} duration={5} />
          </div>
          <div className="text-4xl font-bold border p-5">
            <h1>Total Users</h1>
            <CountUp end={users.length} duration={5} />
          </div>
          <div className="text-4xl font-bold border p-5">
            <h1>Total Enrollment</h1>
            <CountUp end={10000} duration={5} />
          </div>
        </div>
        <div className="hidden lg:flex">
          <Lottie style={{ height: "80vh" }} animationData={classAnimation} />
        </div>
      </div>
    </>
  );
};

export default Counter;
