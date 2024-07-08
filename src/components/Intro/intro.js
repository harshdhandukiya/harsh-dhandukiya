import React from 'react';
import './intro.css';
import btnimg from '../../assets/hm.png';
import bg from '../../assets/profile.jpeg';
import { Link } from 'react-scroll';



const Intro = () => {
    return(
        <section id = "intro">
            <div className='IntroContent'>
                <span className="Hello"> Hello,</span>
                <span className='Intotext'>I'm <span className='Introname'>Harsh Dhandukiya</span></span>
                <p className='Intropara'> <br/> With passion for data, I thrive on transforming numbers into meaningful insights using <br/> python, SQL, and awesome visualization tools like Power BI and Tableau. <br/> Let's work together to uncover the hidden stories behind your data!</p>
                <Link><button className = "Btn"><img src={btnimg} alt ="Hire Me" className='btnimg'/>Hire Me</button> </Link>
            </div>
            <img src = {bg} alt = "Profile" className='bg'/>
        </section>
    )
}


export default Intro;