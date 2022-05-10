import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { navLinks } from "./utils";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className={styles.header}>
      {/* Logo */}
      <div className={styles.header_logo}>
        <Link to="/">
          <img
            className={styles.header__logoImg}
            src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
            alt=""
          />
        </Link>
      </div>
      {/* Links */}
      <ul className={styles.header_links}>
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.to} className={styles.header_link} key={link.id}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Right Portion */}
      <div className={styles.header_right}>
        <ul className={isMenuOpen ? styles.header_link_hidden : null}>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/login">Tesla Account</Link>
          </li>
        </ul>
        <div
          className={styles.header_menu}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseIcon className={styles.icon} />
          ) : (
            <MenuIcon className={styles.icon} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
