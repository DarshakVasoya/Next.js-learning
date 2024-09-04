  "use server"
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";

export const addPost = async(formData:FormData) =>{
  
    // const title=formData.get("title");
    // const desc=formData.get("desc");
    // const slug=formData.get("slug");
    // const userId=formData.get("userId");
    
    const {title, desc, slug, userId} =Object.fromEntries( formData);
    console.log(title, desc, slug)
    // revalidatePath("/Post") : this is used when data is updated, and you need quick updation in website page

}
export const handleGithubLogin = async ()=>{
   
    await signIn('github')

}
export const handleLogout = async() =>{
   
    await signOut()

}