import Lottie from "lottie-react";
import bannerAnimation from "../../../assets/data/bannerAnimation.json";
const Banner = () => {
  return (
    <>
      <div className="hero h-[calc(100vh-100px)] shadow-lg border-2">
        <div className="hero-content text-black">
          <div className="flex-1">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              Elevate Your Education Experience with{" "}
              <span className="text-[#DDA0DD]">Learn Sphere</span>
            </h1>
            <p className="mb-5 text-2xl">
              Effortless class management, seamless enrollment, and progress
              tracking. Our platform streamlines your academic journey.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className="flex-1">
            <Lottie
              animationData={bannerAnimation}
              style={{ height: "80vh" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
