import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-5">
      {classes.map((clas) => (
        <div key={clas._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={clas.image}
                alt="Shoes"
                className="rounded-xl w-48 h-28"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{clas.courseName}</h2>
              <div className=" text-left text-lg font-medium">
                <p>
                  <span className="font-bold">Instructor:</span>{" "}
                  {clas.teacherName}
                </p>
                <p>
                  <span className="font-bold">About this course:</span>{" "}
                  {clas.shortDescription}
                </p>
                <p>
                  <span className="font-bold">Price:</span> {clas.price}
                </p>
                <p>
                  <span className="font-bold">Total Enrollment:</span>{" "}
                  {clas.enrollment}
                </p>
              </div>
              <Link className="btn bg-green-400 text-white">Enroll</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllClasses;
