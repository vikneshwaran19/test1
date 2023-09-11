import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeRoute from "./HomeRoute";
import AboutRoute from "./AboutRoute";

const NavigationBar = () => {

    return (
        <>
        <Routes>
            <Route path="/" element={<HomeRoute />} > </Route>
        <Route path="/homeroute" element= {<HomeRoute />} > </Route>
        <Route path ="/aboutroute" element={<AboutRoute />}> </Route>
        </Routes>
        
        </>
    );
};

export default NavigationBar;