import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:{
    default:"myManga",
    template:"%s | template"
  },
  description: "mymanga website is here",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        
        <Navbar/>
        {children}
        <Footer/>             
      
        </div>
      </body>
    </html>
  );
}
