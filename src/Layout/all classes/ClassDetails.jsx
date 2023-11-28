import { useState } from "react";
import UseClass from "../../hooks/UseClass";
import { useEffect } from "react";

const ClassDetails = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/class/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  return (
    <div>
      <h1>ok</h1>
    </div>
  );
};

export default ClassDetails;
