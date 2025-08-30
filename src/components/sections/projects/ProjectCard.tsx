import React, { useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  tech: string[];
  links: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  images,
  title,
  description,
  tech,
  links,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col justify-between min-h-112 md:m-auto group w-full xs:w-45 sm:w-50 md:50 lg:w-70 xl:80 text-white bg-gray-900 border-2 border-red-800 hover:border-red-700 hover:shadow-red-700 hover:shadow-[-2px_-2px_4px,2px_2px_4px] rounded-lg "
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div className="flex overflow-hidden">
        <motion.div
          animate={{
            x: images.map((_, i) => `-${i * 100}%`),
          }}
          transition={{
            duration: images.length * 1.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="flex">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`${title} project interface image`}
              className="rounded-t-lg"
            />
          ))}
        </motion.div>
      </div>
      <div className="p-2 gap-2 flex flex-col justify-between grow">
        <h2 className="text-sm sm:text-md flex w-full justify-center">
          <strong className="text-green-600 tracking-widest">{title}</strong>
        </h2>
        <p className="text-sm sm:text-md">
          <span className="font-bold">Description:</span> {description}
        </p>
        <p className="text-sm sm:text-md">
          <span className="font-bold">Teckstact:</span> {tech.join(", ")}
        </p>
        <div className="flex justify-between font-semibold">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={links[0]}
            className="text-xs sm:text-sm md:text-md">
            Live Preview
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={links[1]}
            className="text-xs sm:text-sm md:text-md">
            View Code
          </a>
        </div>
      </div>
      <button
        className={`w-full p-1 font-semibold text-xs sm:text-md lg:text-lg text-center rounded-b-lg border-t-2 border-red-800 ${
          hover
            ? "border-red-700 shadow-red-700 shadow-[-2px_-2px_4px,2px_2px_4px]"
            : ""
        } flex justify-center hover:text-white lg:hover:text-red-400 hover:bg-[#5f5f5f5d] cursor-pointer`}>
        Show Site With Code
      </button>
    </div>
  );
};

export default ProjectCard;
