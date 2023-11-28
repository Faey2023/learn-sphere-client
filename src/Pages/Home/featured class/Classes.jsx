// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//rating
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { useEffect } from "react";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div className="my-16 border">
      <h2 className="text-5xl font-bold text-center mt-3">Featured Classes</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {classes.map((clas) => (
          <SwiperSlide className="p-5" key={clas._id}>
            <div>
              <img className="w-48 h-28" src={clas.image} alt="" />
              <h3 className="font-bold text-xl">{clas.courseName}</h3>
              <p>{clas.teacherName}</p>
              <div className="flex gap-2">
                <p className="font-bold">{clas.rating}</p>
                <Rating
                  style={{ width: "100px" }}
                  value={clas.rating}
                  readOnly
                ></Rating>
                <p>({clas.enrollment})</p>
              </div>
              <p className="font-bold">${clas.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Classes;
