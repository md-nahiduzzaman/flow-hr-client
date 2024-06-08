import About from "../../components/About";
import Banner from "../../components/Banner";
import ContactUs from "../../components/ContactUs";
import NewsLetter from "../../components/NewsLetter";
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
      <div className="mt-24 mb-24">
        <About></About>
      </div>
      <div className="mt-24 mb-24">
        <NewsLetter></NewsLetter>
      </div>
      <div className="mt-24 mb-24">
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
