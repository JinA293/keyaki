import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./index.module.css";
import { contents } from "../../../lib/contents";

export default function BasicSlider() {
  const slideSettings = {
    0: {
      slidesPerView: 1.4,
      // spaceBetween: 100,
    },
    1024: {
      slidesPerView: 2.2,
      // spaceBetween: 100,
    },
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={slideSettings}
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      fadeEffect={{
        crossFade: true,
      }}
      // className={styles.slideWrapper}
    >
      {contents.map((content: any, index: number) => (
        <SwiperSlide key={index}>
          <Link href={`home/${content.href}`}>
            <div
              style={{
                overflow: "hidden",
                padding: "20px 20px", // 上下にパディングを追加
                backgroundColor: "#F19DC0", // 背景色を設定
              }}
            >
              <Image
                src={content.src}
                width={600}
                height={300}
                alt="Slider Image"
                loading="eager"
                style={{ paddingBottom: "10px" }}
              />
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
