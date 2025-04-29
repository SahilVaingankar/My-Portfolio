import React, { useRef } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

interface HamburgerMenuProps {
  links: string[];
  isOpen: boolean;
  setIsOpen: (prop: boolean) => void;
  handleMenu: () => void;
  activeLinkIndex: number;
  setActiveLinkIndex: React.Dispatch<React.SetStateAction<number>>;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  links,
  isOpen,
  setIsOpen,
  handleMenu,
  activeLinkIndex,
  setActiveLinkIndex,
}) => {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleKeydown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      linkRefs.current[activeLinkIndex]?.click();
    } else if (e.key === "ArrowDown") {
      setActiveLinkIndex((prevIndex) => (prevIndex + 1) % links.length);
    } else if (e.key === "ArrowUp") {
      setActiveLinkIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : links.length - 1
      );
    }
  };

  return (
    <>
      <button
        className={`relative p-1 rounded-lg sm:hidden text-white hover:bg-gray-700 ${
          isOpen ? "bg-gray-800" : ""
        }`}
        onClick={handleMenu}
        onKeyDown={handleKeydown}
        onBlur={() =>
          setTimeout(() => {
            setIsOpen(false);
          }, 150)
        }
        onMouseLeave={() => setActiveLinkIndex(-1)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Close menu" : "Open menu"}>
        <HiMenuAlt3 size={24} />
      </button>
      {isOpen && (
        <div
          className="absolute right-4 top-10 inline-block"
          id="mobile-menu"
          role="menu"
          onMouseLeave={() => setActiveLinkIndex(-1)}>
          <ul className="flex-col rounded-lg border border-white p-2 bg-gray-800">
            {links.map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  ref={(el) => {
                    linkRefs.current[index] = el;
                  }}
                  onMouseEnter={() => setActiveLinkIndex(index)}
                  className={`block mb-2 text-white  p-2 rounded-lg transition-colors duration-300 ${
                    links[activeLinkIndex] === item
                      ? "bg-gray-500"
                      : "bg-gray-800"
                  }`}
                  role="menuitem">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
