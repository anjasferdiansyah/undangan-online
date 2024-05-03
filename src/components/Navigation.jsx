const Navigation = () => {
  return (
    <nav className="fixed flex justify-center items-center bottom-0 w-full h-[50px] z-10 bg-blue-500/40 backdrop-blur-sm">
      <ul className="flex w-full justify-evenly items-center">
        <li className="text-white hover:text-blue-500">
          <a href="#welcome">Welcome</a>
        </li>
        <li className="text-white hover:text-blue-500">
          <a href="#gallery">Gallery</a>
        </li>
        <li className="text-white hover:text-blue-500">
          <a href="#rsvp">RSVP</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
