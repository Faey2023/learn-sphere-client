import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Collaborator = () => {
  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch("https://12-server-nine.vercel.app/partners")
      .then((res) => res.json())
      .then((data) => {
        setPartners(data);
      });
  }, []);
  return (
    <>
      <div className="my-5">
        <h1 className="text-3xl font-bold text-center my-4">
          Trusted by over
          <span className="text-sky-500"> 15,000 </span>companies and millions
          of learners worldwide.
        </h1>
        <Marquee>
          <div className="flex gap-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="w-40 h-40 border-2 flex flex-col justify-center items-center rounded-xl border-[#ca84ca]"
              >
                <img className="h-32 w-32" src={partner.brandImage} alt="" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Collaborator;
