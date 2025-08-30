import { useContext } from "react";
import image from "./images/laptop-image.jpg";
import { NavContext } from "../../NavContextProvider";
import { motion } from "framer-motion";

const Home = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("NavContext must be used within a NavContextProvider");
  }

  const { setSelectedLink } = context;

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-red-600 via-black to-gray-600 flex items-center justify-center min-h-[100svh] py-15 overflow-hidden">
      <motion.div
        className="flex flex-col items-center justify-center py-20 sm:py-30 w-full"
        style={{ backgroundImage: `url(${image})` }}
        onViewportEnter={() => setSelectedLink("Home")}
        viewport={{ once: false, amount: 0.8 }}>
        <p
          className="text-4xl md:text-5xl font-bold text-white"
          style={{ textShadow: "-2px -2px 4px blue,2px 2px 4px blue" }}>
          Hii, I Am
        </p>
        <h2
          className="text-center text-red-600 text-6xl md:text-7xl font-bold text-shadow-none"
          style={{
            textShadow:
              "-1px -1px 0 black,1px -1px 0 black,-1px 1px 0 black,1px 1px 0 black",
          }}>
          Sahil Vaingankar
        </h2>
        <p className="text-center text-lg font-bold mt-8 p-4 text-white bg-black/50 backdrop-blur-xl rounded-lg border-2 border-white">
          selfthought frontend dev who enjoys crafting simple, user-friendly
          interfaces and solving problems with code.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
