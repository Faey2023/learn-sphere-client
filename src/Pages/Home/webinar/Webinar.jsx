import AOS from "aos";
import "aos/dist/aos.css";

const Webinar = () => {
  AOS.init();
  return (
    <div className="flex flex-col gap-5 md:flex-row mb-5">
      <div
        data-aos="flip-left"
        data-aos-duration="1000"
        className="flex-1 flex flex-col justify-center items-center text-center space-y-3"
      >
        <h1 className="text-3xl font-bold">Join our weekly webinar</h1>
        <p className="font-medium text-xl">
          Join us this week for an exclusive session with Jhankar Mahbub, CEO &
          Founder of Programming Hero, as he shares invaluable insights on
          forging a successful career in Web Development. Gain firsthand
          knowledge from a seasoned expert, discover key strategies for success,
          and embark on a transformative journey towards a fulfilling career.
        </p>
        <a
          className="btn text-sky-950 btn-outline"
          href="https://www.facebook.com/groups/programmingherocommunity/?mibextid=uJjRxr"
        >
          Join Our facebook Page
        </a>
      </div>
      <div data-aos="flip-right" data-aos-duration="2000">
        <img className="rounded shadow-lg" src="https://i.ibb.co/G9js1gg/j.jpg" alt="" />
      </div>
    </div>
  );
};

export default Webinar;
