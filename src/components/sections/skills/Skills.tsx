// import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { items } from "./items.js";

const Skills = () => {
  const duration = 15;

  return (
    <section
      id="Skills"
      className="min-h-[100vh] flex flex-col items-center justify-center gap-3 sm:pt-10">
      <h2 className="text-4xl md:text-2xl t-lg font-bold text-white mt-10 ">
        Skills
      </h2>
      <p className="text-white">Technologies I have learned so far</p>
      <div className="flex flex-col gap-2 landscape-gap-0 w-full h-full items-center">
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
            duration: 5,
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
        {/* <h3 className="text-white border-b-1 font-semibold mt-2 border-white">
          Confirable
        </h3>
        <div
          className="border-y-2"
          style={{
            borderImage: "linear-gradient(to right, red, darkgray) 1",
          }}>
          <div
            className="flex w-[100%] overflow-hidden whitespace-nowrap text-white p-4"
            style={{
              // borderImage: "linear-gradient(to right, red, darkgray) 1",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,1)20%,rgba(0,0,0,1)80%,rgba(0,0,0,0))",
            }}>
            <motion.div
              // ref={position}
              // key={duration}
              className="w-[200%] flex shrink-0 justify-around gap-5"
              // onHoverStart={() => setDuration(30)}
              // onHoverEnd={() => setDuration(5)}
              initial={{ x: 0 }}
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: duration,
                  ease: "linear",
                },
              }}>
              <div className="flex justify-around w-[200%]">
                {[...items, ...items].map((item, index) => (
                  <div key={index} className="text-md lg:text-xl">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <h3 className="text-white border-b-1 font-semibold mt-2 border-white">
          Decent
        </h3>
        <div
          className="border-y-2"
          style={{
            borderImage: "linear-gradient(to right, red, darkgray) 1",
          }}>
          <div
            className="flex w-[100%] overflow-hidden whitespace-nowrap text-white p-4"
            style={{
              // borderImage: "linear-gradient(to right, red, darkgray) 1",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,1)20%,rgba(0,0,0,1)80%,rgba(0,0,0,0))",
            }}>
            <motion.div
              // ref={position}
              // key={duration}
              className="w-[200%] flex shrink-0 justify-around gap-5"
              // onHoverStart={() => setDuration(30)}
              // onHoverEnd={() => setDuration(5)}
              initial={{ x: 0 }}
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: duration,
                  ease: "linear",
                },
              }}>
              <div className="flex justify-around w-[200%]">
                {[...items, ...items].map((item, index) => (
                  <div key={index} className="text-md lg:text-xl">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <h3 className="text-white border-b-1 mt-2 font-semibold border-white">
          Learned but never used
        </h3>
        <div
          className="border-y-2"
          style={{
            borderImage: "linear-gradient(to right, red, darkgray) 1",
          }}>
          <div
            className="flex w-[100%] overflow-hidden whitespace-nowrap text-white p-4"
            style={{
              // borderImage: "linear-gradient(to right, red, darkgray) 1",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,1)20%,rgba(0,0,0,1)80%,rgba(0,0,0,0))",
            }}>
            <motion.div
              // ref={position}
              // key={duration}
              className="w-[200%] flex shrink-0 justify-around gap-5"
              // onHoverStart={() => setDuration(30)}
              // onHoverEnd={() => setDuration(5)}
              initial={{ x: 0 }}
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: duration,
                  ease: "linear",
                },
              }}>
              <div className="flex justify-around w-[200%]">
                {[...items, ...items].map((item, index) => (
                  <div key={index} className="text-md lg:text-xl">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div> */}
      </div>
    </section>

    // <section
    //   id="Skills"
    //   className="flex flex-col justify-center items-center min-h-[100svh]">
    //   <h2 className="text-4xl font-bold text-white">Skills</h2>
    //   <p className="text-white">Technologies I have learned so far</p>
    //   <div className="h-20 max-w-[75%] w-200 flex justify-center items-center mt-5 overflow-hidden">
    //     <div className="space-x-5 w-200 h-20 flex justify-around items-center transform translate-x-0 transition-transform duration-[10s] hover:-translate-x-100">
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //     </div>
    //   </div>
    //   <div className="h-20 max-w-[75%] w-200 flex justify-center items-center mt-5 overflow-hidden">
    //     <div className="space-x-5 w-200 h-20 flex justify-around items-center transform translate-x-0 transition-transform duration-[10s] hover:-translate-x-100">
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //       <div className="h-15 w-15 bg-yellow-300"></div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Skills;
