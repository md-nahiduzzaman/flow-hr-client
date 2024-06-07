import Banner from "../../components/Banner";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="mt-24">
        <Services></Services>
      </div>
      <div className="mt-24 mb-24">
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
