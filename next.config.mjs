/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
           
            {
                protocol:"https",
                hostname:"manhuatop.org"
            },
            {
                protocol:"https",
                hostname:"s2.manhuatop.org"
            }
            

        ]
    }
};

export default nextConfig;
