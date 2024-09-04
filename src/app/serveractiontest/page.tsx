import { addPost } from "@/lib/actionServer";

const ServerAction =() => {
//     const actionTest= async()=>{
//         "use server"
//         console.log("it works")
//     }
  return (
    <div>
        <form action={addPost }>
            <input type="text" placeholder="title" name="title"></input>
            <input type="text" placeholder="desc" name="desc"></input>
            <input type="text" placeholder="slug" name="slug"></input>
            <input type="text" placeholder="userId" name="userId"></input>
            
            <button >
                create
            </button>
        </form>
    </div>
  );
}

export default ServerAction