import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import cssStyle from "../css/Mainslide.module.css";

export default function Mainslide() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className={cssStyle.Mainslide}
    >
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/img/spring.jpg `} alt="봄" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/img/summer.jpg`} alt="여름" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/img/fall.jpg`} alt="가을" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={`${process.env.PUBLIC_URL}/img/winter.jpg`} alt="겨울" />
      </SwiperSlide>
    </Swiper>
  );
}
