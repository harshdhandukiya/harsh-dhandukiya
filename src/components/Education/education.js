import React from 'react';
import './education.css';

const Education = () => {
    return (
        <section id="edu">
            <span className='eduname'> Education</span><br/>
            <div className="line"></div>
            <div className='eduBars'>
                <div className='eduBar'>
                    <div className='eduBarText'>
                        <h2>2019-2023</h2> 
                        <h1>Bachelors of Engineering</h1>
                        <p>University of Mumbai, Mumbai, India</p><br/>
                        <p>Grade: First Class Distinction with 3.8 GPA</p>
                    </div>
                </div>
                <div className='eduBar'>
                    <div className='eduBarText'>
                        <h2>2024-2025</h2> 
                        <h1>Masters of Applied Computing</h1>
                        <p>University of Windsor, Ontario, Canada</p><br/>
                        <p>Grade: First Class Distinction with 3.5 GPA</p>
                    </div>
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1BzuiXMMMgIXME4jIlmAhhjyb4IO7yl2L/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="viewResumeButton">View Resume</button>
            </a>
        </section>
    );
}

export default Education;
