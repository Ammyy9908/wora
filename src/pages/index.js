import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className="w-full h-screen"
    >
    
      
    <video src="/wora.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
  
    </div>
  );
}
