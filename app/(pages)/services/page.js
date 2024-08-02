import { FaChalkboardTeacher, FaMobileAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";

const SERVICES = [{
  id: 1,
  icon: <FaChalkboardTeacher />,
  heading: "Trainer - React JS / MERN Stack / PHP ",
  description: "Educating and mentoring individuals or groups in technical subjects like React JS, MERN Stack, Node JS and Express JS development practices.",
},
{
  id: 2,
  icon: <FaReact />,
  heading: "React JS Development",
  description: "Educating and mentoring individuals or groups in technical subjects like React JS, MERN Stack, Node JS and Express JS development practices.",
},
{
  id: 3,
  icon: <FaNodeJs />,
  heading: "Node JS Development",
  description: "Educating and mentoring individuals or groups in technical subjects like React JS, MERN Stack, Node JS and Express JS development practices.",
},
{
  id: 4,
  icon: <RiNextjsLine />,
  heading: "Next JS Development",
  description: "Educating and mentoring individuals or groups in technical subjects like React JS, MERN Stack, Node JS and Express JS development practices.",
},
{
  id: 5,
  icon: <FaReact />,
  heading: "MERN Stack Development",
  description: "Educating and mentoring individuals or groups in technical subjects like React JS, MERN Stack, Node JS and Express JS development practices.",
},
{
  id: 6,
  icon: <FaMobileAlt />,
  heading: "React Native Development",
  description: "Educating and mentoring individuals or groups in technical subjects like React JS, MERN Stack, Node JS and Express JS development practices.",
}]

export default function Services() {

  return (
    <>
      <section className=" pt-[70px] pb-[50px] min-h-screen max-w-4xl mx-auto">

        <div className="grid grid-cols-1 gap-5 mb-4">

          {SERVICES.map((service) => {
            return <div className="rounded-3xl p-6 px-6 text-gray-400 border border-gray-100 shadow-md flex">
              <div className="text-4xl mr-4 text-white w-20 h-20 rounded-full bg-red-500 flex justify-center items-center">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-black">{service.heading}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          })}

        </div>

      </section>
    </>
  );
}
