import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.container}>
      <NavLink to="generate">Generate QR-code</NavLink>
      <NavLink to="scan">Scan QR-code</NavLink>
      <NavLink to="scanHistory">History scan QR-code</NavLink>
      <NavLink to="generateHistory">History generate QR-code</NavLink>
    </nav>
  );
};

export default Navigation;
