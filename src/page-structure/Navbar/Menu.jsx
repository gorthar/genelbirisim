import MenuItem from "./MenuItem";

function Menu() {
  return (
    <ul className="flex md:gap-8 sm:gap-6">
      <MenuItem text="Home" link="#" />
      <MenuItem text="About" link="#info" />
      <MenuItem text="Contact" link="#contact" />
      <MenuItem text="Projects" link="#projects" />
    </ul>
  );
}

export default Menu;
