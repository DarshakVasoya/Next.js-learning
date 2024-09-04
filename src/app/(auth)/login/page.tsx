import { handleGithubLogin } from "@/lib/actionServer";
import { auth, signIn } from "@/lib/auth";
import { FORMERR } from "dns";

const Login = async () => {
    

 
    return (
        <div>
            <form action={handleGithubLogin}>
                <button>login with github </button>
            </form>
        </div>
    );
}

export default Login