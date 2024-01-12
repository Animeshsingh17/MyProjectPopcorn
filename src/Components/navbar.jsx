import Logo from "../utils/logo";

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      {" "}
      <Logo />
      {children}
    </nav>
  );
};
export default NavBar;
