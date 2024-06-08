import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "./LoadingSpinner";

const Testimonials = () => {
  const axiosSecure = useAxiosSecure();

  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/testimonials`);
      return data;
    },
  });
  console.log(testimonials);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div className="container mx-auto px-2">
        <div className="container p-4 mx-auto my-6 space-y-1 text-center flex flex-col items-center justify-center">
          <h2 className="pb-3 text-base font-medium md:text-xl">Testimonial</h2>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
          <p className="lg:w-[60%] text-center mt-8 pb-7">
            At FlowHr, our commitment to excellence in HR services is reflected
            in the positive experiences of our clients. We take pride in
            fostering strong partnerships and delivering solutions that make a
            tangible difference. Don’t just take our word for it—read what our
            satisfied customers have to say about their experiences working with
            us:
          </p>
        </div>
        <div>
          <div>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {testimonials.map((testimonial) => (
                <>
                  <SwiperSlide key={testimonial._id}>
                    <div className="flex flex-col items-center mx-16">
                      <Rating
                        style={{ maxWidth: 150 }}
                        value={testimonial.rating}
                        readOnly
                      />
                      <p className="font-medium md:text-2xl md:font-bold md:w-[70%] text-center mt-4">
                        {testimonial.details}
                      </p>
                      <p className="md:text-xl mt-4">{testimonial.name}</p>
                    </div>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
