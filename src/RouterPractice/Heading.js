import React from "react";
import { NavLink } from "react-router-dom";

const Heading = () =>
{

    return (
        <>
        <NavLink to ="/"> HOME </NavLink>
        <NavLink to ="/about"> ABOUT </NavLink>

        <NavLink to ="/contact"> CONTACT US </NavLink>

        
        </>
    );
};

export default Heading;