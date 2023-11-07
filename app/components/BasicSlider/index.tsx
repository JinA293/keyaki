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
                    <Link href={content.href} passHref>
                    <Image
                        src={content.src}
                        width={600}
                        height={300}
                        alt="Slider Image"
                        sizes="(min-width: 1024px) 100vw, 60vw"
                        loading="eager"
                        // className={styles.slideImage}
                    />
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}