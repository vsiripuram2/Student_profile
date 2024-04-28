// Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.primaryNav}>
        <NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/UserSignUp">
          Sign Up
        </NavLink>
        <NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/PostStudentDetails">
          Student Form
        </NavLink>
        <NavLink activeClassName={styles.activeLink} className={styles.navLink} to="/PostStudentMarks">
          Student Marks Form
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
