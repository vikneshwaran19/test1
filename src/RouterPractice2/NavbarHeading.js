import React from "react";
import {NavLink} from "react-router-dom";

const NavbarHeading = () => {

    return (
        <>
        <NavLink to="/homeroute"> HOMEROUTE </NavLink>
        <NavLink to ="/aboutroute" >ABOUT ROUTE</NavLink>
        </>
    );
};


export default NavbarHeading;