import { useState } from "react";

const links = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "Mempelai",
    id: "#mempelai",
  },
  {
    name: "Gallery",
    id: "#gallery",
  },
  {
    name: "RSVP",
    id: "#rsvp",
  },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("#home");

  console.log(activeSection);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 flex justify-center items-center bottom-3 w-[90%] rounded-xl h-[50px] z-10 backdrop-blur-sm bg-white/40`}
    >
      <ul className="flex w-full justify-evenly items-center">
        {links.map((link) => (
          <li
            key={link.id}
            className={`${
              link.id === `${activeSection}` ? "active" : ""
            } cursor-pointer relative flex px-2 py-1 items-center justify-center`}
            onClick={() => setActiveSection(link.id)}
          >
            <a href={link.id}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
