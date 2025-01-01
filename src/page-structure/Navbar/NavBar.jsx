import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="flex w-full h-16 shadow-xl shadow-green-300/40 sticky top-0 bg-white z-40">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a className="hidden sm:block" href="https://www.dkahraman.com/">
          <p className="font-bold text-lg sm:text-3xl text-green-600">D-Dev</p>
        </a>
        <div className="w-full sm:w-auto">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
