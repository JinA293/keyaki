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
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      speed={1000}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      fadeEffect={{
        crossFade: true,
      }}
      // className={styles.slideWrapper}
      breakpoints={{
        // when window width is >= 640px
        640: {
          width: 640,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
    >
      {contents.map((content: any, index: number) => (
        <SwiperSlide key={index}>
          <Link href={`home/${content.href}`}>
            <div
              style={{
                overflow: "hidden",
                padding: "20px 20px", // 上下にパディングを追加
                backgroundColor: "#F19DC0",
                display: "flex", // 横方向に要素を並べる
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={content.src}
                  objectFit="cover"
                  objectPosition="center"
                  width={450}
                  height={200}
                  alt="Slider Image"
                  loading="eager"
                  style={{
                    paddingBottom: "10px",
                  }}
                />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
