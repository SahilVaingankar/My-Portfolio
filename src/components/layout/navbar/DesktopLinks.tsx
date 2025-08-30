const DesktopLinks = ({
  links,
  selectedLink,
  setSelectedLink,
}: {
  links: string[];
  selectedLink: string;
  setSelectedLink: (item: string) => void;
}) => {
  // const [selectedLink, setSelectedLink] = useState<string>("Home");

  return (
    <>
      <ul className="space-x-4 hidden sm:flex" role="menubar">
        {links.map((item) => (
          <li key={item} role="menuitem">
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setSelectedLink(item)}
              className={` p-2 rounded-lg transition-colors duration-300 hover:bg-gray-800 ${
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
