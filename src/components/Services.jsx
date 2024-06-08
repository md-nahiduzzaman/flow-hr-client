import Container from "./Container";

const Services = () => {
  return (
    <div>
      <Container></Container>
      <div>
        <div className="container p-4 mx-auto my-6 space-y-1 text-center flex flex-col items-center justify-center">
          <h2 className="pb-3 text-base font-medium md:text-xl">Services</h2>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
            Comprehensive HR Solutions Tailored <br /> to Your Needs
          </h2>

          <p className="lg:w-[60%] text-center mt-8">
            We are dedicated to providing exceptional HR services that support
            your business growth and enhance employee satisfaction. Our
            comprehensive solutions are designed to streamline your HR
            processes, ensuring a seamless and productive workplace. Discover
            how we can help your organization thrive with our specialized
            services
          </p>
        </div>
      </div>
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm border p-8 rounded mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Talent Acquisition and Recruitment
                  </h3>

                  <p>
                    Finding the right talent is crucial for your business
                    success. Our expert recruitment team uses advanced sourcing
                    techniques and an extensive network to identify, attract,
                    and hire top candidates who align with your companys culture
                    and goals.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm border p-8 rounded mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1520110120835-c96534a4c984?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Employee Training and Development
                  </h3>

                  <p>
                    Invest in your team's growth with our customized training
                    and development programs. From leadership workshops to
                    skill-specific courses, we provide the tools and resources
                    needed to enhance your employees' capabilities and foster
                    continuous improvement.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm border p-8 rounded mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    HR Compliance and Policy Management
                  </h3>

                  <p>
                    Navigating the complex landscape of HR regulations can be
                    challenging. Our compliance experts ensure that your
                    organization adheres to all legal requirements, helping you
                    develop and implement policies that protect your business
                    and support a fair workplace.
                  </p>
                </div>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm border p-8 rounded mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="https://images.unsplash.com/photo-1519074002996-a69e7ac46a42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                    Performance Management and Employee Engagement
                  </h3>

                  <p>
                    Boost productivity and morale with our performance
                    management solutions. We offer comprehensive tools and
                    strategies for setting goals, providing feedback, and
                    recognizing achievements, creating an engaged and motivated
                    workforce dedicated to your company's success.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
