import Link from "next/link";
import Links from "./Links/Links";
import style from "./navbar.module.css"
import { auth } from "@/lib/auth";

const Navbar = async() => {
    const sesstion = await auth();
    console.log(sesstion);
    return (
        <div className={style.container}>
            <Link href="/" className={style.logo}>Logo</Link>
            <div>
          <Links session={sesstion} />
                
            </div>
        </div>
    );
}

export default Navbar
