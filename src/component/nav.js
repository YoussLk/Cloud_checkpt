import React from "react";
import './nav.css';
import { Link } from "react-router-dom";

function Nav()
{
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>

    );
}
export default Nav;