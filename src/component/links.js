import React from "react";
import { Link } from "react-router-dom";

function Links() {
    return (
        <nav>
            <Link to="/" >Home</Link> | 
            <Link to="about" >About</Link> |
            <Link to="contact" >Contact</Link> |
            <Link to="event" >Event</Link>
        </nav>
    );
}

export default Links;