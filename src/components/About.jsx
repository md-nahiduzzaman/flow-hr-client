import Container from "./Container";

const About = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col lg:flex-row gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="sm:w-[50%] md:w-[100%] lg:w-[50%] "
            data-aos="fade-right"
            data-aos-duration="1000"
          />
          <div data-aos="fade-left" data-aos-duration="1000">
            <h2 className="pb-3 text-base font-medium md:text-xl">Services</h2>
            <h2 className="text-4xl font-bold ">
              Committed to Excellence in <br /> HR Solutions
            </h2>
            <p className="py-6">
              At FlowHR, we are passionate about empowering businesses through
              exceptional human resources services. With years of experience and
              a dedicated team of HR professionals, we understand that your
              people are your greatest asset. Our mission is to provide tailored
              HR solutions that drive organizational success and foster a
              positive workplace culture. We believe in building lasting
              partnerships with our clients, offering personalized support and
              innovative strategies to meet their unique needs. Whether it's
              talent acquisition, employee development, compliance management,
              or performance enhancement, we are here to help you navigate the
              complexities of HR with confidence and ease. Discover how FlowHr
              can make a difference for your business and your people.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
