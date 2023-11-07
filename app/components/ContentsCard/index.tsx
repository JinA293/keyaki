import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

type Props = [
    content: {
        contentsrc: string
        title: string
        subTitle: string
    }
]
export default function ContentsCard({ content }: Props) {
    return (
        <div className={styles.categoryButton}>
            <Link href={content.href} passHref>
                <Image
                    src={content.src}
                    width={480}
                    height={259}
                    alt="Slider Image"
                    sizes="(min-width: 1024px) 100vw, 60vw"
                    loading="eager"
                // className={styles.slideImage}
                />
                <div className={styles.title}>{content.title}</div>
                <div className={styles.subTitle}>{content.subTitle}</div>
            </Link>
        </div >
    );
}