import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  items: any;
  header: string;
  duration: number;
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  header,
  duration,
  reverse = false,
}) => {
  return (
    <>
      <h3 className="text-white border-b-1 font-semibold mt-2 border-white ">
        {header}
      </h3>
      <div
        className="border-y-2 w-full"
        style={
          reverse
            ? {
                borderImage: "linear-gradient(to left, red, darkgray) 1",
              }
            : {
                borderImage: "linear-gradient(to right, red, darkgray) 1",
              }
        }>
        <div
          className="flex w-[100%] overflow-hidden whitespace-nowrap text-white p-4"
          style={{
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,1)20%,rgba(0,0,0,1)80%,rgba(0,0,0,0))",
          }}>
          <motion.div
            className="w-[200%] flex shrink-0 justify-around gap-5 "
            animate={reverse ? { x: ["-50%", 0] } : { x: [0, "-50%"] }}
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
                <div
                  key={index}
                  className="text-md lg:text-xl flex flex-col justify-center items-center px-0.5">
                  <img
                    src={item.svg}
                    alt={item.alt}
                    className="h-7 w-7 md:h-10 md:w-10"
                  />
                  <p className="text-sm md:text-md">{item.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
