import style from "./home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Createive Socierty Agency</h1>
        <p className={style.disc}>
          it is the website where you can see a lot manga
        </p>
        <div className={style.buttons}>
          <button className={style.button}> Learn More</button>
          <button className={style.button}> Contact Us</button>
        </div>
           <div className={style.brands}>
          <Image
          src="https://manhuatop.org/wp-content/uploads/2024/08/the-great-war-193x278.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw"
        />
        </div>
     
        
       
        
      </div>

      <div className={style.imageContainer}>
        <Image
          src="https://manhuatop.org/wp-content/uploads/2024/08/the-great-war-193x278.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw"
        />
      </div>
    </div>
  );
}
