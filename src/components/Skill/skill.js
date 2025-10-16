import React, { useState, useEffect } from 'react';
import './skill.css';

const Skill = () => {
    const [progressValues, setProgressValues] = useState({
        python: 0,
        sql: 0,
        powerbi: 0,
        tableau: 0,
        excel: 0,
        software: 0
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgressValues({
                python: 90,
                sql: 85,
                powerbi: 88,
                tableau: 82,
                excel: 95,
                software: 80
            });
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const skills = [
        {
            title: 'Python Programming',
            description: 'Advanced Python development for data analysis, automation, and building scalable solutions using libraries like Pandas, NumPy, and Scikit-learn.',
            progress: progressValues.python,
            icon: '🐍',
            color: '#00ffff'
        },
        {
            title: 'SQL',
            description: 'Proficient in writing complex queries, database design, and optimizing large datasets for reporting and analytics.',
            progress: progressValues.sql,
            icon: '🗄️',
            color: '#ff00ff'
        },
        {
            title: 'Power BI',
            description: 'Create interactive dashboards and reports that transform raw data into actionable business insights.',
            progress: progressValues.powerbi,
            icon: '📊',
            color: '#ffff00'
        },
        {
            title: 'Tableau',
            description: 'Design interactive visualizations and dashboards to communicate complex data effectively to stakeholders.',
            progress: progressValues.tableau,
            icon: '📈',
            color: '#00ff00'
        },
        {
            title: 'Excel Expertise',
            description: 'Advanced skills in pivot tables, formulas, macros, and automation for data analysis and reporting.',
            progress: progressValues.excel,
            icon: '📋',
            color: '#ff6600'
        },
        {
            title: 'Software Development',
            description: 'Experience in building robust software solutions, implementing best practices, and developing applications with clean, maintainable code.',
            progress: progressValues.software,
            icon: '💻',
            color: '#ff1493'
        }
    ];

    return (
        <section id="skill">
            <div className="skillContainer">
                <span className='skillTitle'>Technical Skills</span>
                <div className="cyberLine"></div>
                <span className='skillDescription'>
                    Mastering the tools that transform data into actionable insights.
                    From raw data processing to compelling visualizations, I leverage cutting-edge technologies
                    to deliver data-driven solutions that drive business success.
                </span>

                {/* Skill Grid with Progress Bars */}
                <div className='skillGrid'>
                    {skills.map((skill, index) => (
                        <div key={index} className='skillCard' style={{ '--delay': `${index * 0.2}s` }}>
                            <div className="skillHeader">
                                <div className="skillIcon" style={{ color: skill.color }}>
                                    {skill.icon}
                                </div>
                                <div className="skillInfo">
                                    <h3>{skill.title}</h3>
                                    <div className="progressBar">
                                        <div
                                            className="progressFill"
                                            style={{
                                                width: `${skill.progress}%`,
                                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                                            }}
                                        ></div>
                                        <span className="progressText">{skill.progress}%</span>
                                    </div>
                                </div>
                            </div>
                            <p className="skillDesc">{skill.description}</p>
                            <div className="skillGlow" style={{ background: skill.color }}></div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack Section */}
                <div className="techStack">
                    <h3>Core Technologies</h3>

                    {/* Technical Languages */}
                    <div className="techCategory">
                        <strong>Technical Languages:</strong>
                        <div className="techIcons">
                            {[
                                "Python (Pandas, NumPy, Scikit-learn)",
                                "SQL (MySQL, SQL Server, Snowflake)",
                                "R", "C/C++", "Java"
                            ].map((tech, index) => (
                                <div key={index} className="techItem">
                                    <span className="techIcon"></span>
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scripting & Web Technologies */}
                    <div className="techCategory">
                        <strong>Scripting & Web Technologies:</strong>
                        <div className="techIcons">
                            {[
                                "Shell scripting", "JavaScript", "HTML", "CSS",
                                "Django", "Flask", "React", "Node.js", "REST APIs"
                            ].map((tech, index) => (
                                <div key={index} className="techItem">
                                    <span className="techIcon"></span>
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Software */}
                    <div className="techCategory">
                        <strong>Tools & Software:</strong>
                        <div className="techIcons">
                            {[
                                "Tableau", "Power BI", "Databricks", "Docker", "Git", "SSMS",
                                "MATLAB", "Jupyter", "Agile/Scrum", "Microsoft Excel (Advanced)"
                            ].map((tech, index) => (
                                <div key={index} className="techItem">
                                    <span className="techIcon"></span>
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cloud & Platforms */}
                    <div className="techCategory">
                        <strong>Cloud & Platforms:</strong>
                        <div className="techIcons">
                            {[
                                "AWS (EC2, S3, Lambda, DynamoDB)",
                                "Microsoft Azure", "Linux/Unix", "Kubernetes"
                            ].map((tech, index) => (
                                <div key={index} className="techItem">
                                    <span className="techIcon"></span>
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Data & ML Skills */}
                    <div className="techCategory">
                        <strong>Data & ML Skills:</strong>
                        <div className="techIcons">
                            {[
                                "Data Modeling", "ETL Pipelines", "Data Warehousing", "Data Cleaning",
                                "Machine Learning (Regression, Classification, Clustering)",
                                "Data Visualization", "A/B Testing", "Statistics",
                                "Data Validation", "Data Governance"
                            ].map((tech, index) => (
                                <div key={index} className="techItem">
                                    <span className="techIcon"></span>
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Soft Skills Section */}
                    <div className="techCategory">
                        <strong>Soft Skills:</strong>
                        <div className="techIcons">
                            {[
                                "Communication", "Team Player", "Active Listening", "Problem Solving",
                                "Adaptability", "Time Management", "Creativity", "Critical Thinking",
                                "Leadership", "Collaboration"
                            ].map((skill, index) => (
                                <div key={index} className="techItem">
                                    <span className="techIcon"></span>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Skill;
