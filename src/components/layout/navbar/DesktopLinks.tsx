const DesktopLinks = ({ links }: { links: string[] }) => {
  return (
    <>
      <ul className="space-x-4 hidden sm:flex" role="menubar">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="text-white p-2 rounded-lg transition-colors duration-300 hover:bg-gray-800"
              role="menuitem">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DesktopLinks;
