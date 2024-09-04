"use client";
import { useState } from "react";
import style from "./link.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actionServer";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { NextPage } from "next";
interface MyComponentProps {
    session: Session | null;
  }
const Links:NextPage<MyComponentProps> =  ({session}) => {

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "contact",
            path: "/contact",
        },
        {
            title: "post",
            path: "/Post",
        },
    ];
    const [open, setOpen] = useState(false);

    // temporary
 



    return (
        <div className={style.container}>
            <div className={style.links}>

                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session?.user ? (
                    <>

                        {session.user?.isAdmin && (
                            <NavLink item={{ title: "Admin", path: "/admin" }} />
                        )}
                        <form action={handleLogout}>
                            <button className={style.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}

            </div>

            <Image className={style.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)} />
            {
                open && (
                    <div className={style.mobilesLink}>
                        {
                            links.map((link) => <NavLink item={link} key={link.title} />
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Links;
