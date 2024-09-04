import Image from "next/image";
import style from "./about.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title:"my manga",
    description: "mymanga website is here",
  };
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subTitle}>About Manga</h2>
        <h1 className={style.title}>
          hello guys, donare us so we provide more and more new manga
        </h1>
        <p className={style.desc}>
          Heelo, if anyone has problem regarding copyright, you can mail us,
          these all manga has been uploaded by third users
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10 k+</h1>
            <p> year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 k+</h1>
            <p> year of experience</p>
          </div>
          <div className={style.box}>
            <h1>10 k+</h1>
            <p> year of experience</p>
          </div>
        </div>
      </div>
      <div className={style.imgContainer}>
        <Image
          src="https://manhuatop.org/wp-content/uploads/2024/08/post_95143_image-75x106.jpg"
          alt=""
          fill
          className={style.img}
          sizes="(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw"
        ></Image>
      </div>
    </div>

    // <div> <div className={style.imgContainer}>   <Image src="https://manhuatop.org/wp-content/uploads/2022/05/I-Went-On-Strike-Because-It-Was-A-Time-Limit-193x278.jpeg" alt="" fill></Image>  </div></div>
  );
};

export default About;
