import Link from "next/link";
import { PiDownloadLight, PiGithubLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight, PiYoutubeLogoLight } from "react-icons/pi";

const HeroServices = ["React JS Developer", "Mern Stack Developer", "Node JS Developer", "Technical Trainer", "Blogger", "Youtuber"]

export default function Home() {

  return (
    <>
      <section className="px-4 md:px-0 text-center h-svh flex justify-center items-center flex-col">
        <img className="w-[150px] mb-8 mx-auto rounded-full border-4 border-red-500 shadow-lg" src="https://shrikant-yadav.vercel.app/assets/images/shrikant-yadav-profile-narmadapuram-pic.png" alt="Profile Pic"></img>
        <p className="text-xl md:text-2xl mb-2">Hi There</p>
        <p className="text-2xl md:text-4xl mb-4"><storng className="text-red-600 font-bold">Shrikant Yadav</storng></p>

        <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
          {HeroServices.map((service) => <span className="border cursor-default shadow-inner px-3 rounded-full py-1 border-blue-500 text-blue-400 text-sm">
            {service}
          </span>)}
        </div>
        <p className="max-w-2xl mx-auto mb-4 text-gray-500">Passionate about creating engaging content and building robust web solutions using React JS, Next JS, JavaScript, TypeScript, CSS, and HTML..</p>
        <div className="flex justify-center items-center mb-4 gap-4">
          <Link href={"#"} className="text-2xl">
            <PiLinkedinLogoLight />
          </Link>
          <Link href={"#"} className="text-2xl">
            <PiGithubLogoLight />
          </Link>
          <Link href={"#"} className="text-2xl">
            <PiInstagramLogoLight />
          </Link>
          <Link href={"#"} className="text-2xl">
            <PiYoutubeLogoLight />
          </Link>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap text-sm">
          <Link download target="_blank" href={"https://shrikant-yadav.vercel.app/assets/pdf/Shrikant_Yadav_Resume_AuG_2024.pdf"} className="flex gap-3 justify-center items-center px-4 leading-none py-2 rounded-xl bg-blue-500 text-white shadow-md">
            <PiDownloadLight className="text-xl" /> My Resume
          </Link>
          {/* <Link href={"#"} className="px-4 py-2 rounded-xl bg-red-500 text-white uppercase shadow-md">
            My Work
          </Link> */}
        </div>
      </section>
    </>
  );
}
