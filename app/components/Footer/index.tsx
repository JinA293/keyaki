import styles from "./index.module.css";
import Image from "next/image";


export default function Header () {
    return (
        <div className={styles.logo}>
            <Image
                src="/basicSlider/PeachTechロゴ_文字あり_透過.png"
                width={100}
                height={100}
                alt="Slider Image"
                sizes="(min-width: 1024px) 100vw, 60vw"
                loading="eager"
                // className={styles.logo}
            />
        </div>
    )
}