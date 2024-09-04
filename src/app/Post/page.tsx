import style from "./post.module.css"

import PostCard from "@/components/postCard/PostCard"
import { NextPage } from "next"
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;

  }

interface BlogPageProps {
    params: {
      [key: string]: string;
    };
    searchParams: {
      [key: string]: string | string[];
    };
    posts: Post[];
   
  }
  
// fetchinf data
const getData= async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok)
    {
        throw new Error("Something went wrong")
    }

    return res.json()

}

const BlogPage: NextPage<BlogPageProps> = async ({params,searchParams}) => {
    // it get data on server side
    // console.log(params);
    // console.log(searchParams)
    const posts= await getData();
  
    return (
        <div className={style.container}>
           {posts.map( (post:Post) => (
            <div className={style.post} key={post.id}>
                    <PostCard post={post}/>
             </div>
        
           ))}
            
          
        </div>
    );
}

export default BlogPage