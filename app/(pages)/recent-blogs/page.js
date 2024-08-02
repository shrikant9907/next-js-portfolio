import Link from "next/link";
import { PiDownloadLight, PiGithubLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight, PiYoutubeLogoLight } from "react-icons/pi";

export default function Home() {

  return (
    <>
      <section className="text-center py-10 min-h-screen">
        <img className="w-[200px] mb-8 mx-auto rounded-full border-4 border-blue-500" src="https://shrikant-yadav.vercel.app/assets/images/shrikant-yadav-profile-narmadapuram-pic.png" alt="Profile Pic"></img>
        <p className="text-2xl mb-2">Hi There</p>
        <p className="text-4xl mb-4"><storng className="text-red-600 font-bold">Shrikant Yadav</storng></p>

        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="border px-3 rounded-full py-1 border-blue-500 text-blue-400 text-sm">
            React JS Trainer
          </span>
          <span className="border px-3 rounded-full py-1 border-blue-500 text-blue-400 text-sm">
            Node JS Trainer
          </span>
          <span className="border px-3 rounded-full py-1 border-blue-500 text-blue-400 text-sm">
            MERN Stack Trainer
          </span>
          <span className="border px-3 rounded-full py-1 border-blue-500 text-blue-400 text-sm">
            Full Stack Web Developer
          </span>
          <span className="border px-3 rounded-full py-1 border-blue-500 text-blue-400 text-sm">
            Blogger
          </span>
          <span className="border px-3 rounded-full py-1 border-blue-500 text-blue-400 text-sm">
            Youtuber
          </span>
        </div>
        <p className="max-w-2xl mx-auto mb-4">Passionate about creating engaging content and building robust web solutions using React JS, Next JS, JavaScript, TypeScript, CSS, and HTML..</p>
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

        <div className="flex justify-center items-center gap-4">
          <Link href={"#"} className="flex gap-3 justify-center items-center px-4 py-2 rounded-xl bg-blue-950 uppercase border border-blue-900">
            <PiDownloadLight className="text-xl" /> My Resume
          </Link>
          <Link href={"#"} className="px-4 py-2 rounded-xl bg-red-950 uppercase border border-red-900">
            My Work
          </Link>
        </div>
      </section>
    </>
  );
}
