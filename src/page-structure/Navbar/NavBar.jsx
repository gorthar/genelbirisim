import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="flex w-full h-16 shadow-xl shadow-green-300/40 items-center justify-center sticky top-0 bg-white z-50">
      <div className="bar-container flex w-full max-w-6xl justify-center sm:justify-between mx-2 sm:mx-8">
        <a className="hidden sm:block" href="https://www.dkahraman.com/">
          <p className="font-bold text-lg sm:text-3xl text-green-600">D-Dev</p>
        </a>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
