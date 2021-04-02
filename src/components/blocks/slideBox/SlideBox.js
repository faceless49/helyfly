import s from "./SlideBox.module.scss";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { Profile } from "../../profile/Profile";
import { Slide } from "./slide/Slide";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const SlideBox = (props) => {
  return (
    <div className={s.slideBox}>
      <div className={s.container}>
        <div className={s.slideBoxWrapper}>
          <Swiper
            slidesPerView={1}
            navigation
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Slide number="1" subtitle="Где встречаемся?" text="Москва" />
            </SwiperSlide>

            <SwiperSlide>
              <Slide number="2" subtitle="Стоимость?" text="850$" />
            </SwiperSlide>

            <SwiperSlide>
              <Slide
                number="3"
                subtitle="Сколько мест?"
                text="Осталось — 1 место"
              />
            </SwiperSlide>
          </Swiper>
          <Profile class={s.heroAvatar} proffession="Фотограф" style={{width: "67px", height: "67px", textAlign: "left"}} />
        </div>
      </div>
    </div>
  );
};
