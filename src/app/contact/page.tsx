import style from "./contact.module.css"
import Image from "next/image";
const Contact =() => {
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="https://manhuatop.org/wp-content/uploads/2024/08/high-school-musical-genius-is-paganini-reincarnated-193x278.png" alt="" fill className={style.img}    sizes="(max-width: 768px) 100vw, 
          (max-width: 1200px) 50vw, 
          33vw"></Image>
            </div>
            <div className={style.formContainer}> 
                <form action="" className={style.form}>
                    <input type="text" placeholder="Name and Surname"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Phone Number (Optional)"/>
                    <textarea name=" " id="" cols={30} rows={10} placeholder="Message"></textarea>
                    <button>send</button>
                </form>
               
            </div>

        </div>
    );
}

export default Contact