import React from "react";
import Logo from "../assets/A.B.C..png";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {

 
    return(
       <section className={styles.container}>
        
        <div className={styles.links}>
            <img src={Logo} className={styles.image} alt="ABC Company Logo"/>
            <NavLink to="home" className={(NavButton) => NavButton.isActive ? styles.active : ""}>Home</NavLink>
            <NavLink className={(NavButton) => NavButton.isActive ? styles.active : ""} to="pricing">Pricing</NavLink>
            <NavLink className={(NavButton) => NavButton.isActive ? styles.active : ""} to="aboutus">About Us</NavLink>
           
        </div>
       </section>
    )
    
}

export default NavBar;