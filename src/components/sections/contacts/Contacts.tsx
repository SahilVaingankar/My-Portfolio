import { FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Contacts = () => {
  return (
    <section
      id="contacts"
      className="flex flex-col justify-center items-center gap-3 min-h-[100svh] text-white">
      <h2 className="font-semibold text-5xl mt-5">Contacts</h2>
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
