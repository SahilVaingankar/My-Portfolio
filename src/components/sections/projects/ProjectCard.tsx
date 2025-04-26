import React, { useState } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech: string[];
  links: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  tech,
  links,
}) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="group w-40 xs:w-45 sm:w-50 md:50 lg:w-70 xl:80 text-white bg-gray-900 border-2 border-red-800 hover:border-red-700 hover:shadow-red-700 hover:shadow-[-2px_-2px_4px,2px_2px_4px] rounded-lg"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <img src={image} alt={title} className="rounded-t-lg" />
      <div className="p-2">
        <h2 className="text-sm sm:text-md">{title}</h2>
        <p className="text-sm sm:text-md">{description}</p>
        <p className="text-sm sm:text-md">{tech}</p>
        <div className="flex justify-between">
          <a href={links[0]} className="text-xs sm:text-sm md:text-md">
            Live Preview
          </a>
          <a href={links[1]} className="text-xs sm:text-sm md:text-md">
            View Code
          </a>
        </div>
      </div>
      {/* <div className="p-1 text-xs sm:text-md lg:text-lg text-center rounded-b-lg border-t-2 border-red-800 flex justify-center">
        <a href={links[2]}>Show Site With Code</a>
      </div> */}
      <button
        className={`w-full p-1 text-xs sm:text-md lg:text-lg text-center rounded-b-lg border-t-2 border-red-800 ${
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
