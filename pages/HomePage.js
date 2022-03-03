import React from "react";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
function HomePage() {
  const [x, setX] = useState(0);
  console.log(x);
  useEffect(() => {
    const inter = setInterval(() => setX((prev) => prev + 0.5), 50);
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.s}>Vinyl Rotate</h1>
      <div
        style={{
          transform: `rotate(${x}deg)`,
        }}
        className={styles.h}
      >
        <Image
          src="/imgs/Space Pixel Art.png"
          className={styles.img}
          width={280}
          height={170}
        />
      </div>
    </div>
  );
}

export default HomePage;
