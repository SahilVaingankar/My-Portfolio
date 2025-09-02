import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NavContext } from "../../NavContextProvider";

// portfolio
import homeImg from "../../../assets/portfolio/home.png";
import aboutImg from "../../../assets/portfolio/about.png";
import skillsImg from "../../../assets/portfolio/skills.png";
import projectsImg from "../../../assets/portfolio/projects.png";
import contactsImg from "../../../assets/portfolio/contacts.png";

// e-commerce
import ecommerceHomeImg from "../../../assets/e-commerce website/home.png";
import loginImg from "../../../assets/e-commerce website/login.png";
import registerImg from "../../../assets/e-commerce website/register.png";
import cartImg from "../../../assets/e-commerce website/cart.png";
import cardImg from "../../../assets/e-commerce website/card.png";

// fasttype
import fasttypeHomeImg from "../../../assets/typefast/home.png";
import fasttypeHomeImg2 from "../../../assets/typefast/home2.png";
import endgameImg from "../../../assets/typefast/endgame.png";
import codeDemoImg from "../../../assets/typefast/code.png";

const Projects = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("NavContext must be used within a NavContextProvider");
  }

  const { setSelectedLink } = context;

  return (
    <motion.section
      id="projects"
      className="flex flex-col justify-center items-center min-h-[100svh] pb-6 sm:py-10 "
      onViewportEnter={() => setSelectedLink("Projects")}
      viewport={{ once: false, amount: 0.5 }}>
      <h2 className="text-white font-bold text-xl pt-15 ">Projects</h2>
      <div className="bg-[#5f5f5f5d] p-2 m-2 mt-3 rounded-lg flex justify-center flex-wrap sm:flex-nowrap items-center gap-2 ">
        <ProjectCard
          {...{
            images: [
              fasttypeHomeImg,
              fasttypeHomeImg2,
              codeDemoImg,
              endgameImg,
              fasttypeHomeImg,
            ],
            title: "TypeFast",
            description:
              "A web app that tracks how long a user takes to complete a generated text.",
            tech: ["MERN Stack", "Typescript", "Tailwind"],
            links: [
              "https://type-fast-puce.vercel.app/",
              "https://github.com/SahilVaingankar/TypeFast",
            ],
          }}
        />
        <ProjectCard
          {...{
            images: [
              ecommerceHomeImg,
              loginImg,
              registerImg,
              cardImg,
              cartImg,
              ecommerceHomeImg,
            ],
            title: "E-commerce Website",
            description:
              "Responsive e-commerce app with authentication, protected routes, product filtering/sorting, and cart management.",
            // description:
            //   "A fully responsive MERN e-commerce app built from scratch with authentication, protected routes, product filtering/sorting, and cart management — showcasing both frontend and backend skills.",
            tech: ["MERN Stack", "Typescript", "Tailwind", "Zustand"],
            links: [
              "https://e-commerce-website-steel-eight.vercel.app",
              "https://github.com/SahilVaingankar/E-CommerceWebsite",
            ],
          }}
        />
        <ProjectCard
          {...{
            images: [
              homeImg,
              aboutImg,
              skillsImg,
              projectsImg,
              contactsImg,
              homeImg,
            ],

            title: "Portfolio website",
            description: "Current Portfolio Website.",
            tech: ["React", "Typescript", "Tailwind", "Motion"],
            links: ["/", "https://github.com/SahilVaingankar/My-Portfolio"],
          }}
        />
      </div>
    </motion.section>
  );
};

export default Projects;
