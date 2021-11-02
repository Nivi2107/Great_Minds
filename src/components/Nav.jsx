import React from "react";
import Navstyle from "./Nav.module.css";

function Nav(){
    return(
        <>
            <div className={Navstyle.navbar}>
                <h2>GreatMinds</h2>
                <a href='/home'><h3>Home</h3></a>
            </div>
        </>
        )
}

export default Nav;