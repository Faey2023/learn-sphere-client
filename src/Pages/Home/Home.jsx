import Banner from "./banner/Banner";
import Collaborator from "./collaborators/Collaborator";
import Counter from "./counter/Counter";
import Classes from "./featured class/Classes";
import Feedback from "./feedback/Feedback";
import Join from "./teachers/Join";
import Webinar from "./webinar/Webinar";

const Home = () => {
  return (
    <div>
      <Banner />
      <Collaborator />
      <Classes />
      <Feedback />
      <Counter />
      <Join />
      <Webinar />
    </div>
  );
};

export default Home;
