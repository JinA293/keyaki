"use client";

import Introduction from "@/app/components/detailCard";
import { contents } from "@/lib/contents";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// import { useRouter, usePathname } from "next/navigation";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// import { contents } from "../../../lib/contents";
// import { ContentCard } from "@/app/components/ContentsCard";

// export default function Page() {
//   const router = useRouter();
//   const pathname = usePathname();
//   // URLからproductNameを抽出するためには、pathnameを解析する
//   const productName = pathname.split("/").pop();
//   const content = contents.find((content) => content.title === productName);

//   return (
//     <div>
//       <Header />
//       <h1>{productName}</h1>
//       <img src={`/basicSlider/${productName}.jpg`} width={300} height={200} />
//       <button onClick={() => router.push("/home")}>Click Me</button>
//       <ContentCard content={content} />
//       <Footer />
//     </div>
//   );
// }

export default function AboutDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const circle = contents.find((circle) => circle.href === params.slug);
  const router = useRouter();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Introduction circleCard={circle} />
      <button
        style={{
          marginTop: "20px",
          width: "200px",
          height: "50px",
          fontSize: "20px",
          backgroundColor: "#F19DC0",
          borderRadius: "10px", // ボタンの角を丸くする
        }}
        onClick={() => router.push("/home")}
      >
        戻る
      </button>
    </div>
  );
}
