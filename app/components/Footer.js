import Link from "next/link";
import { PiHeartFill } from "react-icons/pi";


const Footer = () => {
  return (
   <footer className="fixed w-full bottom-0">
     <div className="rounded-b-none flex justify-center items-center h-14 bg-white/10 backdrop-blur-sm max-w-4xl rounded-2xl mx-auto">
      Made with <PiHeartFill className="mx-2 text-red-500" /> by <Link href={"https://www.linkedin.com/in/shrikantdev/"}>Shrikant</Link>
    </div>
   </footer>
  )
}

export default Footer
