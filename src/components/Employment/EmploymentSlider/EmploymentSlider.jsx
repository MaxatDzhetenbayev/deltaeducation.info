import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

import styles from "./EmploymentSlider.module.scss";

import { Navigation, Grid } from "swiper/modules";
import { HTag } from "../../../shared/ui";
import { companiesList } from "../../../shared/consts/consts";

export const EmploymentSlider = () => {
  return (
    <>
      <HTag style={{ marginTop: "60px", textAlign: "center" }} variant="h3">
        Здесь работают наши выпускники
      </HTag>
      <Swiper
        navigation={true}
        modules={[Navigation, Grid]}
        autoplay={{
          delay: 1000,
          stopOnLastSlide: true,
        }}
        className={styles.slider}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          960: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          540: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: {
              rows: 2,
            },
            spaceBetween: 30,
          },
        }}
      >
        {companiesList.map((item, index) => (
          <SwiperSlide key={index} className={styles.slider_item}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
