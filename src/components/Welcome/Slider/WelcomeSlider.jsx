import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import { useModal } from "../../../shared/hooks/useModal";

import { Button, HTag, Modal, PTag, Wrapper } from "../../../shared/ui";
import { EnrollInCourse } from "../../../shared/ui/Modal/ModalContents/EnrollInCourse/EnrollInCourse";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./WelcomeSlider.module.scss";

import image1 from "../../../assets/images/welcome/slider/slider-1page.png";
import image2 from "../../../assets/images/welcome/slider/slider-2page.jpg";

export const WelcomeSlider = () => {
  const [isView, open, close] = useModal();

  const bgImage = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

  return (
    <>
      <Swiper
        className={styles.root}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide style={bgImage(image1)} className={styles.slider_item}>
          <Wrapper>
            <div className={styles.center}>
              <div className={styles.col}>
                <HTag variant="h3">
                  НОВЫЙ УЧЕБНЫЙ <br /> ЦЕНТР
                </HTag>
                <PTag style={{ marginTop: 20 }} variant="lg">
                  Ведем прием заявок на пробное занятие!
                </PTag>
                <Button handleCLick={open} style={{ marginTop: 30 }}>
                  Оставить заявку
                </Button>
              </div>
            </div>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide style={bgImage(image2)} className={styles.slider_item}>
          <Wrapper>
            <div className={styles.center}>
              <div className={styles.col}>
                <div className={styles.background}>
                  <HTag variant="h3">
                    Открыта запись <br /> на пробный урок!
                  </HTag>
                  <PTag style={{ marginTop: 20 }} variant="lg">
                    Приглашаем всех на полноценное бесплатное пробное занятие с
                    преподавателями школы DELTA EDUCATION
                  </PTag>
                </div>
                <Button handleCLick={open} style={{ marginTop: 30 }}>
                  Оставить заявку
                </Button>
              </div>
            </div>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
      <Modal
        onClose={close}
        content={<EnrollInCourse onClose={close} />}
        isView={isView}
      />
    </>
  );
};
