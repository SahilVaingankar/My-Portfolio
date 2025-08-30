import { FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useContext } from "react";
import { NavContext } from "../../NavContextProvider";

const Contacts = () => {
  const context = useContext(NavContext);

  if (!context) {
    throw new Error("NavContext must be used within a NavContextProvider");
  }

  const { setSelectedLink } = context;

  return (
    <section
      id="contacts"
      className="flex flex-col justify-center items-center gap-3 min-h-[100svh] text-white">
      <motion.h2
        className="font-semibold text-5xl mt-8"
        onViewportEnter={() => setSelectedLink("Contacts")}
        viewport={{ once: false, amount: 0.5 }}>
        Contacts
      </motion.h2>
      <p className="text-xl text-center sm:px-10">
        I'm not too active on social media, but always open to connecting for
        right opportunity.
      </p>
      <ul className="sm:flex sm:gap-5 mb-10 sm:mb-5">
        <li className="mt-7 sm:mt-15">
          <a
            className="flex flex-col justify-center items-center text-xl"
            href="mailto:sahilvaingankar21@gmail.com">
            <MdEmail className="h-10 w-10" aria-hidden="true" />
            E-mail
          </a>
        </li>
        <li className="mt-15">
          <a
            className="flex flex-col justify-center items-center text-xl"
            href="tel:+91 9518798413">
            <FiPhoneCall className="h-10 w-10" aria-hidden="true" />
            +91 9518798413
          </a>
        </li>

        <li className="mt-15">
          <a
            className="flex flex-col justify-center items-center text-xl"
            href="https://github.com/SahilVaingankar">
            <FaGithub className="h-10 w-10" aria-hidden="true" />
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
