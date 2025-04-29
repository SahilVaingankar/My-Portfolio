import { useState } from "react";

const DesktopLinks = ({ links }: { links: string[] }) => {
  const [selectedLink, setSelectedLink] = useState<string>("");

  return (
    <>
      <ul className="space-x-4 hidden sm:flex" role="menubar">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setSelectedLink(item)}
              className={` p-2 rounded-lg transition-colors duration-300 hover:bg-gray-800 visited:text-red-500"
              role="menuitem ${
                item === selectedLink ? "text-red-500" : "text-white"
              }`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DesktopLinks;
