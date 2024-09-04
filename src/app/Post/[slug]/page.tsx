import style from "./singlePost.module.css";
import Image from "next/image";
import { NextPage } from "next";
import PostUser from "@/components/postUser/PostUser";
import { Suspense } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface SinglePostPageProps {
  params: {
    slug: number; // assuming slug is passed as a string parameter
  };
}

export const generateMetadata = async ({params})=>{
    const { slug } = params;
  const post = await getData(slug);
  return {
    title:post.title,
    description : post.body
  };


} 

const getData = async (slug: number): Promise<Post> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};

const Singlepostpage: NextPage<SinglePostPageProps> = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src="https://manhuatop.org/wp-content/uploads/2024/08/high-school-musical-genius-is-paganini-reincarnated-193x278.png"
          alt=""
          fill
          className={style.img}
        />
      </div>

      <div className={style.textContainer}>
        <h1 className={style.title}>{post.title}</h1>
        <div className={style.detail}>
          <Image
            className={style.avatar}
            src="https://manhuatop.org/wp-content/uploads/2024/08/high-school-musical-genius-is-paganini-reincarnated-193x278.png"
            alt=""
            width={50}
            height={50}
          />
          <Suspense fallback={<div>Loading...</div>}>  <PostUser userId={post.userId}/></Suspense>
      

          <div className={style.detailText}>
            <span className={style.detailTitle}>Published</span>
            <span className={style.detailValue}>28.08.2024</span>
          </div>
        </div>
        <div className={style.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default Singlepostpage;
