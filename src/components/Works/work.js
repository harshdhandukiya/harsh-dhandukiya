import React from 'react';
import './work.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.jpeg';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.png';
import Project5 from '../../assets/project5.png';

const Works = () => {
    return (
        <section id='works'>
            <span className='workstittle'> My Projects</span><br/>
            <div className="line"></div>
            <span className='worksubtittle'> Welcome to my Projects!</span><br/>
            <span className='WorksDescription'> Dive into the Projects section of my portfolio! Here, you'll discover a vibrant collection of my most impactful and varied projects. These works not only showcase my skills and creativity but also my passion for turning ideas into reality. Each project reflects my dedication to delivering top-notch, innovative solutions that make a difference. </span>
            <div className='worksImgs'>
                <div className='project'>
                    <a href="https://github.com/harshdhandukiya/Power-BI-Dashboard-Visualization-and-Data-Analysis-for-Northwind-Dataset" target="_blank" rel="noopener noreferrer">
                    <img src={Project1} alt="" className='worksImg' />
                    <div className="project-title">Power BI Dashboard Visualization and <br/> Data Analysis for Northwind Dataset</div>
                    </a>
                </div>
                <div className='project'>
                <a href="https://github.com/harshdhandukiya/Image-Gallery" target="_blank" rel="noopener noreferrer">
                    <img src={Project2} alt="" className='worksImg' />
                    <div className="project-title">Image Gallery</div>
                    </a>
                </div>
                <div className='project'>
                <a href="https://github.com/harshdhandukiya/Virtual-Laboratory" target="_blank" rel="noopener noreferrer">
                    <img src={Project3} alt="" className='worksImg' />
                    <div className="project-title">Simulation of Simple Parity Check</div>
                    </a>
                </div>
                <div className='project'>
                    <a href="https://github.com/harshdhandukiya/Marine-Bot-Analyst" target="_blank" rel="noopener noreferrer">
                    <img src={Project4} alt="" className='worksImg' />
                    <div className="project-title">Marine-bot Analyst</div>
                    </a>
                </div>
                <div className='project'>
                <a href="https://github.com/harshdhandukiya/Carrent" target="_blank" rel="noopener noreferrer">
                <img src={Project5} alt="" className='worksImg' />
                <div className="project-title">Carrent</div>
                </a>
</div>
            </div>
            <a href="https://github.com/harshdhandukiya?tab=repositories" target="_blank" rel="noopener noreferrer" className="workBtn">See More Projects</a>
        </section>
    )
}

export default Works;


