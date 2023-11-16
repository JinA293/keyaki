"use client";

import { useRouter, usePathname } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function handleClick() {
  const router = useRouter();
  const pathname = usePathname();
  // URLからproductNameを抽出するためには、pathnameを解析する
  const productName = pathname.split("/").pop();

  return (
    <div>
      <Header />
      <h1>{productName}</h1>
      <img src={`/basicSlider/${productName}.jpg`} width={300} height={200} />
      <button onClick={() => router.push("/home")}>Click Me</button>
      <Footer />
    </div>
  );
}
