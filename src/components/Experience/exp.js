import React from 'react';
import './exp.css';

const Experience = () => {
    return (
        <section id="exp">
            <span className='expname'> Professional Experience </span><br/>
            <div className="line"></div>
            <div className='expBars'>
                <div className={`expBar border1`}>
                    <div className='expBarText'>
                    <div class="expBarText">
                        <h2>Python Developer</h2>
                        <h1> - MIRA Advance Engineering</h1>
                    </div>
                        <h1>August 2023 - October 2023</h1>
                        <p> - Engaged as a Python Developer Intern, spearheading the creation and timely delivery of diverse Python projects. <br/> - Facilitated knowledge transfer by creating informative demonstration videos to comprehensively explain project tasks to team members and employees. <br/> - This proactive approach ensured project success, fostered information exchange, and improved  the organization's overall understanding of the projects. </p>
                    </div>
                </div>
                <div className={`expBar border2`}>
                    <div className='expBarText'>
                    <div class="expBarText">
                        <h2>Software Engineer Intern</h2>
                        <h1> - Vision Mechatronics Pvt Ltd</h1>
                    </div>
                        <h1>October 2022 - April 2023</h1>
                        <p> - Collaborated on the "Pattern Recognition and Behaviour Tagging in IoT Enabled Electrical Devices" project with a team of four developers. <br/> - Designed and implemented a dashboard utilizing custom Python modules and algorithms to enhance pattern detection in Lithium-ion battery sensor data. <br/> - Achieved a significant reduction of 15 hours per week in manual work through innovative solutions. Additionally, managed battery behaviour tagging, supporting over 10 clients in performance assessment, anomaly detection, and device monitoring. </p>
                    </div>
                </div>
                <div className={`expBar border3`}>
                    <div className='expBarText'>
                    <div class="expBarText">
                        <h2>Software Engineer Intern</h2>
                        <h1> - Sureprep Pvt Ltd</h1>
                    </div>
                        <h1>June 2022 - August 2022</h1>
                        <p> - My role was to assist the team to develop products such as TaxCaddy and Fileroom with the help of the ASP.net framework. <br/> - I Leveraged different built-in HTTP features, such as HTTP authentication and HTTP verbs, which can be understood by off-the shelf HTTP clients. <br/> - Employed different technologies such as ASP.net, SQL server, and Java for working on product development and also designed the workflow for File Agent; implemented SQL server queries to find the perfect solution required. <br/> - Had to present my work to different employees. </p>
                    </div>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/harsh-dhandukiya-b460081ab/" target="_blank" rel="noopener noreferrer">
                <button className="viewExpButton">View Experience on Linkedin</button>
            </a>
        </section>
    );
}

export default Experience;
