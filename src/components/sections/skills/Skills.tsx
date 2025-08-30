import { useContext } from "react";
import Marquee from "./Marquee";
import { items } from "./items";
import { NavContext } from "../../NavContextProvider";
import { motion } from "framer-motion";

const Skills = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("NavContext must be used within a NavContextProvider");
  }

  const { setSelectedLink } = context;

  const duration = 15;

  return (
    <motion.section
      id="skills"
      className="min-h-[100vh] flex flex-col items-center justify-center gap-3 sm:pt-8 lg:pt-5"
      onViewportEnter={() => setSelectedLink("Skills")}
      viewport={{ once: false, amount: 0.5 }}>
      <h2 className="text-4xl md:text-2xl lg:text-lg font-bold text-white mt-10 ">
        Skills
      </h2>
      <p className="text-white">Technologies I have learned so far</p>
      <div className="flex flex-col gap-2 w-full h-full items-center">
        <Marquee
          {...{
            items: items.confirtable,
            header: "Confirtable",
            xTranslation: "-50%",
            duration,
          }}
        />
        <Marquee
          {...{
            items: items.decent,
            header: "Decent",
            xTranslation: "-50%",
            duration: 10,
            reverse: true,
          }}
        />
        <Marquee
          {...{
            items: items.rusty,
            header: "Learned with Little Practice",
            xTranslation: "-50%",
            duration,
          }}
        />
      </div>
    </motion.section>
  );
};

export default Skills;
