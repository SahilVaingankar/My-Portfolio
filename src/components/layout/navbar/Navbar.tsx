import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import DesktopLinks from "./DesktopLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLinkIndex, setActiveLinkIndex] = useState<number>(-1);
  const links: string[] = ["Home", "About", "Skills", "Projects", "Contacts"];

  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      setIsOpen(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const isArrow = ["ArrowUp", "ArrowDown"];
      if (isArrow.includes(e.key)) {
        e.preventDefault();
      }
    };

    console.log("event added");
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      console.log("removed added");
    };
  }, [isOpen]);

  const handleMenu = () => {
    !isOpen && setActiveLinkIndex(-1);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="fixed top-0 left-0 bg-black/90 w-full z-50 border-b-2 border-white min-w-[250px]">
        <div className="px-4 py-2 h-[3rem] flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-white">My Portfolio</h1>

          <nav role="navigation" aria-label="Navigation bar">
            {/* HANBURGER MENU */}
            <HamburgerMenu
              {...{
                links,
                isOpen,
                setIsOpen,
                handleMenu,
                activeLinkIndex,
                setActiveLinkIndex,
              }}
            />

            {/* DESKTOP LINKS */}
            <DesktopLinks {...{ links }} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
