import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

type Props = [
  content: {
    contentsrc: string;
    title: string;
    subTitle: string;
  }
];
export default function ContentsCard({ content }: Props) {
  return (
    <div
      className={styles.categoryButton}
      style={{
        marginTop: "25px",
        marginBottom: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "white",
        overflow: "hidden", // 追加
      }}
    >
      <Link href={`home/${content.href}`} passHref>
        <div style={{ overflow: "hidden" }}>
          {" "}
          {/* 修正 */}
          <Image
            src={content.src}
            width={360}
            height={194}
            alt="Slider Image"
            loading="eager"
            style={{
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
            }}
          />
        </div>
        <div
          className={styles.title}
          style={{
            fontSize: "20px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <div
            className={styles.title}
            style={{
              fontSize: "20px",
              paddingTop: "10px", // 上部のパディング
              paddingBottom: "12px", // 下部のパディング
              whiteSpace: "pre-wrap",
            }}
          >
            {content.title}
          </div>
        </div>
      </Link>
    </div>
  );
}

// import Image from "next/image";
// import styles from "./index.module.css";
// import Link from "next/link";
// import { Data } from "@/lib/contents";

// type Props = { content: Data[] };
// export const ContentCard: React.FC<Props> = ({ content }) => (
//   <div className={styles.categoryButton}>
//     <Link href={content.href} passHref>
//       <Image
//         src={content.src}
//         width={480}
//         height={259}
//         alt="Slider Image"
//         sizes="(min-width: 1024px) 100vw, 60vw"
//         loading="eager"
//         // className={styles.slideImage}
//       />
//       <div className={styles.title}>{content.title}</div>
//       <div className={styles.subTitle}>{content.subTitle}</div>
//     </Link>
//   </div>
// );
