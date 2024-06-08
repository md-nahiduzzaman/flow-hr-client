const NewsLetter = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="hero sm:h-[40vh] sm:mt-28 sm:mb-28 mb-4"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
              <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">
                Get Our Updates
              </h1>
              <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">
                Find out about events and other news
              </p>
              <div className="flex flex-row">
                <input
                  type="text"
                  placeholder="example@email.com"
                  className="w-3/5 p-3  sm:w-2/3"
                />
                <button
                  type="button"
                  className="w-2/5 p-3 font-semibold btn sm:w-1/3 text-black rounded-none border-none "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
