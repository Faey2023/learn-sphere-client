import classAnimation from "../../../assets/data/classAnimation.json";
import Lottie from "lottie-react";
import UseClass from "../../../hooks/UseClass";

const Counter = () => {
  const [classes] = UseClass();
  console.log(classes.length);
  return (
    <>
      <div className="flex">
        <div className="flex flex-1 justify-center text-center items-center gap-5">
          <div className="text-4xl font-bold border p-5">
            <h1>Number of classes</h1>
            {classes.length}
          </div>
          <div className="text-4xl font-bold border p-5">
            <h1>Total Users</h1>
            {classes.length}
          </div>
          <div className="text-4xl font-bold border p-5">
            <h1>Total Enrollment</h1>
            {classes.length}
          </div>
        </div>
        <div>
          <Lottie style={{ height: "80vh" }} animationData={classAnimation} />
        </div>
      </div>
    </>
  );
};

export default Counter;
