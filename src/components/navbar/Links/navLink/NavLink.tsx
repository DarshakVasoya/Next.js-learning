"use client";
import { usePathname } from "next/navigation";
import style from "./navLink.module.css"
import Link from "next/link";

const NavLink =({ item }: { item: { path: string; title: string } }) => {
    const pathName= usePathname()
    return (
        <div className={`${style.container} ${pathName === item.path && style.active}`}><Link href={item.path} key={item.title}> {item.title}</Link></div>
        
    );
  }

export default NavLink