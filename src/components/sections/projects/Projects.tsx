import ProjectCard from "./ProjectCard";
import image from "../../../assets/images/laptop-image.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-[100svh] pb-6 sm:py-10 ">
      <h2 className="text-white font-bold text-xl pt-15 ">Projects</h2>
      <div className="bg-[#5f5f5f5d] p-2 m-2 mt-3 rounded-lg flex justify-center flex-wrap sm:flex-nowrap items-center gap-2 ">
        <ProjectCard
          {...{
            image,
            title: "TypeFast",
            description:
              "A web app that tracks how long a user takes to complete a generated text.",
            tech: ["React", "Typescript", "Tailwind"],
            links: ["a", "b", "c"],
          }}
        />
        <ProjectCard
          {...{
            image,
            title: "TypeFast",
            description:
              "A web app that tracks how long a user takes to complete a generated text.",
            tech: ["React", "Typescript", "Tailwind"],
            links: ["a", "b", "c"],
          }}
        />
        <ProjectCard
          {...{
            image,
            title: "TypeFast",
            description:
              "A web app that tracks how long a user takes to complete a generated text.",
            tech: ["React", "Typescript", "Tailwind"],
            links: ["a", "b", "c"],
          }}
        />
      </div>
    </section>
  );
};

export default Projects;
