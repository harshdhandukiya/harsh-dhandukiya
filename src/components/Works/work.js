import React, { useState } from 'react';
import './work.css';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.jpeg';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.png';
import Project5 from '../../assets/project5.png';

const Works = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "Power BI Dashboard",
            subtitle: "Northwind Dataset Analysis",
            description: "Advanced data visualization and business intelligence dashboard for comprehensive sales analytics",
            image: Project1,
            tech: ["Power BI", "SQL", "Data Analysis"],
            github: "https://github.com/harshdhandukiya/Power-BI-Dashboard-Visualization-and-Data-Analysis-for-Northwind-Dataset",
            color: "#00ffff"
        },
        {
            id: 2,
            title: "Image Gallery",
            subtitle: "Web Development Project",
            description: "Dynamic image gallery with modern UI/UX design and responsive layout",
            image: Project2,
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/harshdhandukiya/Image-Gallery",
            color: "#ff00ff"
        },
        {
            id: 3,
            title: "Parity Check Simulator",
            subtitle: "Computer Networks Project",
            description: "Simulation of error detection using simple parity check algorithms",
            image: Project3,
            tech: ["Python", "Algorithms", "Networking"],
            github: "https://github.com/harshdhandukiya/Virtual-Laboratory",
            color: "#ffff00"
        },
        {
            id: 4,
            title: "Marine Bot Analyst",
            subtitle: "Data Analytics Project",
            description: "Comprehensive analysis and visualization of marine robotics data",
            image: Project4,
            tech: ["Python", "Data Science", "Visualization"],
            github: "https://github.com/harshdhandukiya/Marine-Bot-Analyst",
            color: "#00ff00"
        },
        {
            id: 5,
            title: "Car Rental System",
            subtitle: "Full Stack Application",
            description: "Complete car rental management system with booking and inventory features",
            image: Project5,
            tech: ["React", "Node.js", "Database"],
            github: "https://github.com/harshdhandukiya/Carrent",
            color: "#ff6600"
        }
    ];

    return (
        <section id='works'>
            <div className="worksContainer">
                <span className='worksTitle'>Project Showcase</span>
                <div className="cyberLine"></div>
                <span className='worksSubtitle'>Innovation Through Code</span>
                <span className='worksDescription'>
                    Explore my portfolio of data-driven solutions and technical innovations.
                    Each project represents a unique challenge solved with cutting-edge technologies
                    and analytical expertise.
                </span>

                <div className='projectsGrid'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className='projectCard'
                            style={{'--delay': `${index * 0.1}s`}}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="projectImageContainer">
                                <img src={project.image} alt={project.title} className='projectImage' />
                                <div
                                    className="projectOverlay"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                                        opacity: hoveredProject === project.id ? 1 : 0
                                    }}
                                >
                                    <div className="projectTech">
                                        {project.tech.map((tech, idx) => (
                                            <span key={idx} className="techTag" style={{color: project.color}}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="projectLinks">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="githubLink"
                                            style={{borderColor: project.color, color: project.color}}
                                        >
                                            <span className="githubIcon">⚡</span>
                                            View Code
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="projectGlow"
                                    style={{
                                        background: `linear-gradient(45deg, ${project.color}, transparent)`,
                                        opacity: hoveredProject === project.id ? 0.3 : 0
                                    }}
                                ></div>
                            </div>

                            <div className="projectInfo">
                                <h3 className="projectTitle" style={{color: project.color}}>
                                    {project.title}
                                </h3>
                                <h4 className="projectSubtitle">{project.subtitle}</h4>
                                <p className="projectDescription">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <a
                    href="https://github.com/harshdhandukiya?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="viewMoreBtn"
                >
                    <div className="btnIcon">🚀</div>
                    Explore All Projects
                </a>
            </div>
        </section>
    )
}

export default Works;


