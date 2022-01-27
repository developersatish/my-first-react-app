import React from "react";
import { Outlet, useLocation, Link } from 'react-router-dom'

export function Home() {
    return <h1>[Company Website]</h1>
}

export function About() {
    return (
        <>
            <nav>
                <Link to="service" >Service</Link> | 
                <Link to="location" >Location</Link> | 
                <Link to="history" >History</Link>
            </nav>
            <h1>[About]</h1>

            <Outlet></Outlet>
        </>

    );
}

export function Service() {
    return <h2>[Services]</h2>
}


export function Location() {
    return <h2>[Locations]</h2>
}

export function History() {
    return <h2>[History]</h2>
}


export function Event() {
    return <h1>[Event]</h1>
}


export function ContactUs() {
    return <h1>[ContactUs]</h1>
}

export function NotFound() {
    const location = useLocation();
    console.log(location);
    return <h1>[Page does not at {location.pathname} !]</h1>
}