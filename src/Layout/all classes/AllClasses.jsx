import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UseClass from "../../hooks/UseClass";
import { Rating } from "@smastrom/react-rating";

const AllClasses = () => {
  const [classes] = UseClass();
  // const [classes, setClasses] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/class")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClasses(data);
  //     });
  // }, []);

  // console.log(classes);

  return (
    <>
      <h1 className="text-5xl font-bold text-center my-3">All Classes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 my-4">
        {classes.map((clas) => (
          <div className="justify-center items-center" key={clas._id}>
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
            <Link
              to={`/classes/${clas._id}`}
              className="btn btn-outline text-purple-500 mt-2"
            >
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllClasses;
