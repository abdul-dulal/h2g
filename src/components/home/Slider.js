import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import banner from "../../images/banner/1.jpg";
import Button from "../shere/Button";
const Slider = () => {
  return (
    <div
      id="home"
      className="relative  lg:-top-[59px] md:-top-[71px] -top-[71px]  "
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => console.log()}
        onSlideChange={() => console.log()}
      >
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              background: `url(${banner})`,
              height: "100vh",
              backgroundSize: "cover",
            }}
          >
            <div className="space-y-3">
              <p className="text-2xl font-bold text-white">
                We Professional Consultancy
              </p>
              <h2 className="text-3xl font-bold text-white">
                WE BUILD YOUR BUSINESS <br />
                WITH OUR EXPERTS
              </h2>
              <Button>Purchase now</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              background: `url(${banner})`,
              height: "100vh",
              backgroundSize: "cover",
            }}
          >
            <div className="space-y-3">
              <p className="text-2xl font-bold text-white">
                We Professional Consultancy
              </p>
              <h2 className="text-3xl font-bold text-white">
                WE BUILD YOUR BUSINESS <br />
                WITH OUR EXPERTS
              </h2>
              <Button>Purchase now</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              background: `url(${banner})`,
              height: "100vh",
              backgroundSize: "cover",
            }}
          >
            <div className="space-y-3">
              <p className="text-2xl font-bold text-white">
                We Professional Consultancy
              </p>
              <h2 className="text-3xl font-bold text-white">
                WE BUILD YOUR BUSINESS <br />
                WITH OUR EXPERTS
              </h2>
              <Button>Purchase now</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
