"use client";
import Image from "next/image";

import Header from "../components/Header";
import BasicSlider from "../components/BasicSlider";
import CategoryButton from "../components/CategoryButton";
import ContentsCard from "../components/ContentsCard";
import Footer from "../components/Footer";

import styles from "./page.module.css";

import { contents, category } from "../../lib/contents";

export default function Slide() {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <BasicSlider />

        <div className={styles.contentWrapper}>
          {contents.map((content) => (
            <ContentsCard content={content} key={content.title} />
          ))}
        </div>
        <Footer />
      </main>
    </div>
  );
}
