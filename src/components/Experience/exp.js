import React, { useState, useEffect } from 'react';
import './exp.css';

const Experience = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const experiences = [
        {
            id: 1,
            title: "Data Analyst & BI Engineer",
            company: "Ground Effects",
            period: "Jan 2025 - Present",
            icon: "🚀",
            color: "#00ffff",
            achievements: [
                "Developed Python ETL scripts reducing manual intervention by 50%",
                "Mastered Snowflake & SQL achieving 99% data accuracy",
                "Created 10+ Tableau dashboards cutting reporting by 40%",
                "Boosted operational efficiency by 30% through data solutions"
            ],
            tech: ["Python", "Snowflake", "Tableau", "SQL"]
        },
        {
            id: 2,
            title: "Python Developer",
            company: "Mira Advance Engineering",
            period: "Aug 2023 - Oct 2023",
            icon: "🐍",
            color: "#ff00ff",
            achievements: [
                "Delivered multiple projects within strict deadlines",
                "Created demonstration videos for knowledge transfer",
                "Promoted technical clarity through documentation"
            ],
            tech: ["Python", "Documentation", "Project Management"]
        },
        {
            id: 3,
            title: "Software Engineer",
            company: "Vision Mechatronics Pvt Ltd",
            period: "Oct 2022 - Apr 2023",
            icon: "⚡",
            color: "#ffff00",
            achievements: [
                "Developed ML algorithms for battery sensor analysis",
                "Built Django dashboard reducing oversight by 18+ hours/week",
                "Processed 1M+ data points improving prediction accuracy by 30%"
            ],
            tech: ["Python", "Django", "ML", "Data Analysis"]
        },
        {
            id: 4,
            title: "Data Analyst",
            company: "Sureprep Pvt Ltd",
            period: "Jun 2022 - Aug 2022",
            icon: "📊",
            color: "#00ff00",
            achievements: [
                "Identified business trends improving efficiency by 30%",
                "Developed automated reporting tools reducing time by 35%",
                "Designed custom dashboards speeding decision-making by 25%"
            ],
            tech: ["SQL", "Power BI", "Data Analysis"]
        }
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleCardClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <section id="exp">
            <div className="expContainer">
                <span className="expTitle">Professional Journey</span>
                <div className="cyberLine"></div>
                <span className="expDescription">
                    Explore my career milestones through this interactive experience showcase.
                </span>

                <div className="experienceShowcase">
                    {/* Main Featured Card */}
                    <div className="featuredCard">
                        <div className="cardGlow" style={{background: experiences[activeIndex].color}}></div>
                        <div className="cardContent">
                            <div className="cardHeader">
                                <div className="cardIcon" style={{color: experiences[activeIndex].color}}>
                                    {experiences[activeIndex].icon}
                                </div>
                                <div className="cardTitle">
                                    <h2>{experiences[activeIndex].title}</h2>
                                    <h3 style={{color: experiences[activeIndex].color}}>{experiences[activeIndex].company}</h3>
                                    <span className="cardPeriod">{experiences[activeIndex].period}</span>
                                </div>
                            </div>

                            <div className="techStack">
                                {experiences[activeIndex].tech.map((tech, idx) => (
                                    <span key={idx} className="techPill" style={{borderColor: experiences[activeIndex].color, color: experiences[activeIndex].color}}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="achievementsList">
                                {experiences[activeIndex].achievements.map((achievement, idx) => (
                                    <div key={idx} className="achievementItem">
                                        <div className="achievementBullet" style={{background: experiences[activeIndex].color}}></div>
                                        <p>{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Cards */}
                    <div className="navigationCards">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                className={`navCard ${index === activeIndex ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
                                style={{
                                    '--delay': `${index * 0.2}s`,
                                    '--accent-color': exp.color
                                }}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="navCardGlow"></div>
                                <div className="navIcon">{exp.icon}</div>
                                <div className="navContent">
                                    <h4>{exp.title}</h4>
                                    <p>{exp.company}</p>
                                    <span>{exp.period}</span>
                                </div>
                                <div className="navIndicator" style={{background: exp.color}}></div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="progressContainer">
                        <div className="progressBar">
                            <div
                                className="progressFill"
                                style={{
                                    width: `${((activeIndex + 1) / experiences.length) * 100}%`,
                                    background: `linear-gradient(90deg, ${experiences[activeIndex].color}, ${experiences[(activeIndex + 1) % experiences.length].color})`
                                }}
                            ></div>
                        </div>
                        <div className="progressLabels">
                            {experiences.map((exp, index) => (
                                <span
                                    key={exp.id}
                                    className={`progressLabel ${index === activeIndex ? 'active' : ''}`}
                                    style={{color: index === activeIndex ? exp.color : '#666'}}
                                >
                                    {index + 1}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <a
                    className="viewExpLink"
                    href="https://www.linkedin.com/in/harsh-dhandukiya-b460081ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="viewExpButton">
                        <div className="linkedinIcon"></div>
                        View Complete Career Profile
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Experience;
