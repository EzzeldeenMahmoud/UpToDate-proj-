import React from "react";
import { NavLink } from "react-router-dom";



export const  Header = () => {
    return(	
        <>
    <header id="header" class="alt">
        <div className="logo">
            <NavLink to="/home"><strong>Car Dealer</strong> <span>Website</span></NavLink>
            </div>
    
    <nav>
        <a href="#menu">Menu</a>
    </nav>
</header>
	<nav id="menu">
    <ul class="links text-center">
        <li><NavLink to="/home">Home</NavLink></li>
        
        
        <li><NavLink to="/cars">Cars</NavLink></li>

        <li><NavLink to="/about">About Us</NavLink></li>

        
        <li><NavLink to="/blog">Blog</NavLink></li>

   
        <li><NavLink to="/contact">Contact Us</NavLink></li>

        <li class="dropdown">
            
            <ul class="dropdown-menu">
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                <li><NavLink to="/faq">FAQ</NavLink></li>
                <li><NavLink to="/terms">Terms</NavLink></li>
            </ul>
        </li>
    </ul>
</nav>
</>
);
};