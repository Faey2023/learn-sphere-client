import classAnimation from "../../../assets/data/classAnimation.json";
import Lottie from "lottie-react";
const Counter = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 justify-center text-center items-center gap-5"></div>
      <div>
        <Lottie style={{ height: "80vh" }} animationData={classAnimation} />
      </div>
    </div>
  );
};

export default Counter;
// Create a section to show the total users use this website, total
// classes,Total student enrollment in your website. On the left side
// show this information using a card and on the right side show an
// image relevant to your website.
