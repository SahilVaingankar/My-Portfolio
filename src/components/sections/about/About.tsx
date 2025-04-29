import { easeInOut, motion } from "framer-motion";

const About = () => {
  const birthDate = new Date("2001-07-25");
  const currentDate = new Date();

  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();
  const dayDiff = currentDate.getDate() - birthDate.getDate();

  const finalAge =
    monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

  const rightSlideIn = {
    style: { boxShadow: "-2px -2px 4px red,2px 2px 4px gray" },
    whileInView: {
      x: ["100%", 0],
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
  };

  return (
    <section
      id="About"
      className="bd-rd-500 grid grid-col-2 grid-row-3 gap-4 p-5 pt-15 min-h-[100svh]">
      <motion.article
        className="col-span-1 row-span-3 rounded-lg shadow-lg p-2"
        style={{ boxShadow: "-2px -2px 4px red,2px 2px 4px blue" }}
        whileInView={{
          x: ["-100%", 0],
          transition: {
            duration: 0.3,
            ease: easeInOut,
          },
        }}>
        <h1 className="font-bold border-b border-white pb-1  md:pb-2 text-white text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
          My Journey
        </h1>
        <p className="mt-2 text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-[1rem] 2xl:text-2xl">
          Hi, I'm Sahil. I started coding two years ago,{" "}
          <span className="text-lime-500">
            beginning with backend development in Pyton
          </span>
          . That's were I learned about the basics of programming along with
          intermidiate concepts like{" "}
          <span className="text-lime-500">classes, threading, sockets,</span>{" "}
          working with sql databases using
          <span className="text-lime-500"> SQLAlchemy</span>, how{" "}
          <span className="text-lime-500">encryption and decryption</span> works
          and also learned{" "}
          <span className="text-lime-500">
            Mongodb but never used that in any of my project as i mostly sticked
            to sql on the backend.
          </span>
        </p>

        <p className="mt-2 text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-[1rem] 2xl:text-2xl">
          Over time, i build sevral backend project. One of my most recent
          project was a chatroom application using threading, sockets and
          SQLAlchemy. While working on it,{" "}
          <span className="text-lime-500">
            i learned about SQL injections and how to prevent them and keep user
            data safe using techniques like hashing and salting.
          </span>
        </p>

        <p className="mt-2 text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-[1rem] 2xl:text-2xl">
          After that i learned <span className="text-lime-500">Flask</span> and
          through that, I was introdused to frontend development. I started with
          basics <span className="text-lime-500">(HTML, CSS, JS)</span> and
          later moved on to <span className="text-lime-500">React</span>. Since
          then, I been working with React for about a year, learned tools like{" "}
          <span className="text-lime-500">
            Zustand,Redux,TanStack Query, Framer Moion, and testing frameworks.
          </span>{" "}
          I am currently seeking opportunities to work on real-word projects,
          with the goal of starting my career in frontend development and
          gradually transition into full-stack devlopment.
        </p>
      </motion.article>
      {/* <article
        className="col-span-1 row-span-3 border-5 border-red-700 rounded-lg shadow-lg shadow-blue-500"
        style={{ textShadow: "-2px -2px 4px blue,2px 2px 4px blue" }}></article> */}
      <motion.article
        className="col-2 rounded-lg shadow-lg p-2"
        {...rightSlideIn}>
        <h1 className="font-bold border-b border-white pb-1 sm:pb-2 text-white text-md sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Hobbies
        </h1>
        <ul className="pl-2 mt-1 text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-[1rem] 2xl:text-2xl">
          <li
            className="relative 
          before:content-['-'] 
          before:absolute 
          before:left-0 
          before:text-white
          pl-2 lg:pl-3">
            Solving puzzles (cube, pyramix, Megaminx, etc.).
          </li>
          <li> - Playing Chess.</li>
          <li> - Working out.</li>
        </ul>
      </motion.article>
      <motion.article
        className="col-2 rounded-lg shadow-lg p-2"
        {...rightSlideIn}>
        {" "}
        <h1 className="font-bold border-b border-white pb-1 sm:pb-2 text-white text-md sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Current Status
        </h1>
        <ul className="pl-2 mt-1 text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-[1rem] 2xl:text-2xl">
          <li
            className="relative 
          before:content-['-'] 
          before:absolute 
          before:left-0 
          before:text-white
          pl-2 lg:pl-3">
            hunting jobs.
          </li>
          <li> - Building Projects.</li>
          <li> - location Goa/India.</li>
          <li> - age {finalAge}.</li>
        </ul>
      </motion.article>
      <motion.article
        className="col-2 rounded-lg shadow-lg p-2"
        {...rightSlideIn}>
        {" "}
        <h1 className="font-bold border-b border-white pb-1 sm:pb-2 text-white text-md sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
          Pesonal Experience
        </h1>
        <p className="pl-2 mt-1 text-white text-xs sm:text-sm md:text-md lg:text-lg xl:text-[1rem] 2xl:text-2xl">
          While I haven't worked professionally or in a team yet, I've been
          coding for 2 years. I've completed multiple personal projects,
          identifying and solving various challenges to achieve the desired
          results.
        </p>
      </motion.article>
      {/* <article
        className="col-2 border-5 border-red-700 rounded-lg shadow-lg shadow-gray-500"
        style={{ textShadow: "-2px -2px 4px blue,2px 2px 4px blue" }}></article>
      <article
        className="col-2 border-5 border-red-700 rounded-lg shadow-lg shadow-gray-500"
        style={{ textShadow: "-2px -2px 4px blue,2px 2px 4px blue" }}></article> */}
    </section>
  );
};

export default About;
