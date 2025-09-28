import React, { useState, useEffect } from 'react';
import './intro.css';
import bg from '../../assets/profile.jpeg';
import { Link } from 'react-scroll';

const roles = [
    'Data Analyst',
    'Business Intelligence Engineer',
    'Python Developer',
    'SQL Expert',
    'Data Visualization Specialist'
];

const Intro = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeWriter = () => {
            const currentRole = roles[currentIndex % roles.length];

            if (!isDeleting) {
                setCurrentText(currentRole.substring(0, currentText.length + 1));
                if (currentText === currentRole) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setCurrentText(currentRole.substring(0, currentText.length - 1));
                if (currentText === '') {
                    setIsDeleting(false);
                    setCurrentIndex(currentIndex + 1);
                }
            }
        };

        const timer = setTimeout(typeWriter, isDeleting ? 100 : 150);
        return () => clearTimeout(timer);
    }, [currentText, currentIndex, isDeleting]);

    return(
        <section id="intro">
            <div className='IntroContent'>
                <span className="Hello"> Hello,</span>
                <span className='Intotext'>I'm <span className='Introname'>Harsh Dhandukiya</span></span>
                <span className='IntroRole'>A <span className='typingText'>{currentText}</span></span>
                <p className='Intropara'> <br/> With passion for data, I thrive on transforming numbers into meaningful insights using <br/> python, SQL, and awesome visualization tools like Power BI and Tableau. <br/> Let's work together to uncover the hidden stories behind your data!</p>

                <div className="buttonContainer">
                    <Link to="#contact"><button className="Btn primary"><div className="hireIcon"></div>Hire Me</button></Link>
                    <button className="Btn secondary" onClick={() => window.open('/path/to/resume.pdf', '_blank')}><div className="downloadIcon"></div>Download CV</button>
                </div>
            </div>
            <img src={bg} alt="Profile" className='bg'/>
        </section>
    )
}

export default Intro;