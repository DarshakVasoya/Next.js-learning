"use client"
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTest =() => {

  // clint side navation
  const router= useRouter()
  const pathname =usePathname()
  // show pathname
  const searchParams= useSearchParams()
  console.log(searchParams.get("q"))
// show search parameter which in url
// http://localhost:3000/navigationtest?q=test

  const handleClick= () =>{
    console.log("clicked")
    // router.push("/")
    // push ,pop, replace, refresh 
    router.replace("/")

  }
  return (
    <div>
      {/* first way */}
      <Link href="/" prefetch={false} >Clik here</Link>
      {/* second way */}
      <button onClick={handleClick}>Write and redirect</button>
    </div>
  );
}

export default NavigationTest