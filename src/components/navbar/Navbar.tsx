import React from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <h3>Logo</h3>
      <ul className={styles.navLinks}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/page1">
          <li>page1</li>
        </Link>
        <Link to="/page2">
          <li>page2</li>
        </Link>
      </ul>
    </nav>
  );
}
export default NavBar;
