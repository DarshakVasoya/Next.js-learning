    import Link from "next/link";
    import style from "./postCard.module.css"
    import Image from "next/image";
    import { NextPage } from "next";


    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string;
    }
    
    interface PostCardProps {
        post: Post;
    }
    
    const PostCard: NextPage<PostCardProps> =({post}) => {
    return (
        <div className={style.container}>
        <div className={style.top}>
            <div className={style.imgContainer}>
            <Image src="https://manhuatop.org/wp-content/uploads/2024/08/high-school-musical-genius-is-paganini-reincarnated-193x278.png" alt="" fill className={style.img}   sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            33vw"></Image>
            
            </div>
            <span className={style.date}>01.01.2024</span>
        </div>

        <div className={style.bottom}>
            <h1 className={style.title}>{post.title}</h1> <p className={style.desc}> {post.body}</p><Link href={`Post/${post.id}`} className={style.link}> Read More</Link> </div>    
        </div>
    );
    }

    export default PostCard