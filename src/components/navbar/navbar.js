import React from  'react';
import './navbar.css';
import logo from '../../assets/logo.jpeg';
import ContactMe from '../../assets/ContactMe.webp';
import { Link } from 'react-scroll';

const Navbar = () => {
    return(
        <nav className = "navbar">
            <img src = {logo} alt = "logo" className='logo'/>
            <div className = "desktopMenu">
                <Link activeClass="active" to= "intro" spy= {true} smooth= {true} offset={-60} duration={500} className = "desktopMenuListItem">Home</Link>
                <Link activeClass="active" to= "skill" spy= {true} smooth= {true} offset={-60} duration={500}className = "desktopMenuListItem">About Me</Link>
                <Link activeClass="active" to= "edu" spy= {true} smooth= {true} offset={-88} duration={500}className = "desktopMenuListItem">Resume</Link>
                <Link activeClass="active" to= "exp" spy= {true} smooth= {true} offset={-25} duration={500}className = "desktopMenuListItem">Experience</Link>
                <Link activeClass="active" to= "works" spy= {true} smooth= {true} offset={-20} duration={500}className = "desktopMenuListItem">Projects</Link>
            </div>

            <button className='desktopMenuButton' onClick={() =>{
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img src = {ContactMe} alt = '' className='desktopMenuImg'/></button>
        </nav>

    )
}

export default Navbar