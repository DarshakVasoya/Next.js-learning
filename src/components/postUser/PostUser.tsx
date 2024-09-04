import { NextPage } from "next";
import style from "./PostUser.module.css"
interface User {
    userId: number;
    
    username:string;
  }
const getData = async (userId: number): Promise<User> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  };
  interface PostUserProps {
    userId:number;
  }
const PostUser:NextPage<PostUserProps> = async ({userId}) => {
    const user =await getData(userId);
    return (
        <div className={style.container}>
            
            <span className={style.detailTitle}>Author</span>
            <span className={style.detailValue}> {user.username}</span>
        </div>
    );
}

export default PostUser