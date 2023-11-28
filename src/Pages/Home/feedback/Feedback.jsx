import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("https://12-server-nine.vercel.app/feedback")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
      });
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-5xl font-bold text-center mt-3">
        <span className="text-[#CD9003]">Feedback</span> from our students.
      </h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback._id}>
            <div className="flex flex-col justify-center text-center items-center">
              <img
                className="rounded-full h-32 w-32"
                src={feedback.image}
                alt={`image of ${feedback.name}`}
              />
              <h1 className="uppercase text-3xl text-[#CD9003] font-medium">
                {feedback.name}
              </h1>
            </div>
            {/* <div className="flex flex-col justify-center items-center mb-5"></div> */}
            <div className="flex flex-col justify-center items-center">
              <p className="text-xl">🌟 {feedback.text}</p>
              <p className="text-xl">
                Student of <span className="font-bold">{feedback.title}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
