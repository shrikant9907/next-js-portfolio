import { PiGlobe } from "react-icons/pi";

export default function Services() {

  return (
    <>
      <section className="text-center pt-[100px] pb-[70px] min-h-screen max-w-4xl mx-auto">
       
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="rounded-3xl p-6 px-6 text-gray-400 bg-gray-900">
              <div className="text-4xl text-white w-20 h-20 mx-auto mb-5 rounded-full bg-red-700 flex justify-center items-center">
                <PiGlobe />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Technical Trainer</h3>
              <p className="text-sm">Educating and mentoring individuals or groups in technical subjects like React JS, MERN Stack, Node JS and Express JS development practices.</p>
          </div>
          <div className="rounded-3xl p-6 px-6 text-gray-400 bg-gray-900">
              <div className="text-4xl text-white w-20 h-20 mx-auto mb-5 rounded-full bg-red-700 flex justify-center items-center">
                <PiGlobe />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">React JS Development</h3>
              <p className="text-sm">Educating and mentoring individuals or groups in technical subjects like programming languages, frameworks, and software development practices.</p>
          </div>
          <div className="rounded-3xl p-6 px-6 text-gray-400 bg-gray-900">
              <div className="text-4xl text-white w-20 h-20 mx-auto mb-5 rounded-full bg-red-700 flex justify-center items-center">
                <PiGlobe />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Next JS Development</h3>
              <p className="text-sm">Educating and mentoring individuals or groups in technical subjects like programming languages, frameworks, and software development practices.</p>
          </div>
          <div className="rounded-3xl p-6 px-6 text-gray-400 bg-gray-900">
              <div className="text-4xl text-white w-20 h-20 mx-auto mb-5 rounded-full bg-red-700 flex justify-center items-center">
                <PiGlobe />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">MERN Stack Development</h3>
              <p className="text-sm">Educating and mentoring individuals or groups in technical subjects like programming languages, frameworks, and software development practices.</p>
          </div>
          <div className="rounded-3xl p-6 px-6 text-gray-400 bg-gray-900">
              <div className="text-4xl text-white w-20 h-20 mx-auto mb-5 rounded-full bg-red-700 flex justify-center items-center">
                <PiGlobe />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">React Native Development</h3>
              <p className="text-sm">Educating and mentoring individuals or groups in technical subjects like programming languages, frameworks, and software development practices.</p>
          </div>
        </div>
       

     
      </section>
    </>
  );
}
