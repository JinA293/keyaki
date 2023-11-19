"use client";

import { Data } from "@/lib/contents";
import Footer from "../Footer";
import Image from "next/image";

type TProps = {
  circleCard: Data;
};

const Introduction: React.FC<TProps> = ({ circleCard }) => (
  <div
    style={{ background: "#FCE4EC", paddingTop: "20px", paddingBottom: "20px" }}
  >
    <div
      style={{
        fontSize: "40px",
        fontWeight: "bold",
        marginLeft: "30px",
        paddingTop: "30px",
        paddingBottom: "20px",
        position: "relative", // 要素の位置を相対的に設定
        color: "#F19DC0",
        whiteSpace: "pre-wrap", // 折り返しを設定
        overflowWrap: "break-word", // 折り返しを設定
      }}
    >
      {circleCard.title}
      <div
        style={{
          position: "absolute",
          bottom: "-5px",
          left: 0,
          width: "100%", // Set the width to 100% to make it span the entire width
          height: "5px", // Increase the height to make the underline thicker
          background: "#F19DC0", // Change the color to a darker pink
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
        }}
      ></div>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          width: "80%",
          border: "4px solid #000",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
          padding: "20px",
          background: "#F5F5F5",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            border: "2px solid #000",
            padding: "10px",
            background: "#F5F5F5",
            borderRadius: "10px",
          }}
        >
          <Image
            src={circleCard.src}
            layout={"responsive"}
            width={1000}
            height={800}
            alt={"制作物画像"}
          />
        </div>
      </div>
      {
        <div
          style={{
            fontSize: "25px",
            paddingTop: "20px",
            textAlign: "left",
            width: "80%",
          }}
        >
          {circleCard.subTitle}
        </div>
      }
    </div>
    <Footer />
  </div>
);

export default Introduction;
