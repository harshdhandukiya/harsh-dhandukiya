import React, { useState, useEffect } from 'react';
import './skill.css';

const Skill = () => {
    const [progressValues, setProgressValues] = useState({
        python: 0,
        sql: 0,
        powerbi: 0,
        tableau: 0,
        excel: 0,
        pandas: 0
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgressValues({
                python: 90,
                sql: 85,
                powerbi: 88,
                tableau: 82,
                excel: 95,
                pandas: 80
            });
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const skills = [
        {
            title: 'Python Programming',
            description: 'Advanced Python development with data science libraries',
            progress: progressValues.python,
            icon: '🐍',
            color: '#00ffff'
        },
        {
            title: 'SQL Database',
            description: 'Complex queries, database design, and optimization',
            progress: progressValues.sql,
            icon: '🗄️',
            color: '#ff00ff'
        },
        {
            title: 'Power BI',
            description: 'Interactive dashboards and business intelligence',
            progress: progressValues.powerbi,
            icon: '📊',
            color: '#ffff00'
        },
        {
            title: 'Tableau',
            description: 'Advanced data visualization and storytelling',
            progress: progressValues.tableau,
            icon: '📈',
            color: '#00ff00'
        },
        {
            title: 'Excel Expertise',
            description: 'Advanced formulas, pivot tables, and automation',
            progress: progressValues.excel,
            icon: '📋',
            color: '#ff6600'
        },
        {
            title: 'Pandas & NumPy',
            description: 'Data manipulation and scientific computing',
            progress: progressValues.pandas,
            icon: '🔢',
            color: '#ff1493'
        }
    ];

    return(
        <section id="skill">
            <div className="skillContainer">
                <span className='skillTitle'>Technical Skills</span>
                <div className="cyberLine"></div>
                <span className='skillDescription'>
                    Mastering the tools that transform data into actionable insights.
                    From raw data processing to compelling visualizations, I leverage cutting-edge technologies
                    to deliver data-driven solutions that drive business success.
                </span>

                <div className='skillGrid'>
                    {skills.map((skill, index) => (
                        <div key={index} className='skillCard' style={{'--delay': `${index * 0.2}s`}}>
                            <div className="skillHeader">
                                <div className="skillIcon" style={{color: skill.color}}>
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
                            <div className="skillGlow" style={{background: skill.color}}></div>
                        </div>
                    ))}
                </div>

                <div className="techStack">
                    <h3>Core Technologies</h3>
                    <div className="techIcons">
                        <div className="techItem">
                            <span className="techIcon">⚡</span>
                            <span>Python</span>
                        </div>
                        <div className="techItem">
                            <span className="techIcon">🔍</span>
                            <span>SQL</span>
                        </div>
                        <div className="techItem">
                            <span className="techIcon">📊</span>
                            <span>Power BI</span>
                        </div>
                        <div className="techItem">
                            <span className="techIcon">📈</span>
                            <span>Tableau</span>
                        </div>
                        <div className="techItem">
                            <span className="techIcon">📋</span>
                            <span>Excel</span>
                        </div>
                        <div className="techItem">
                            <span className="techIcon">🧮</span>
                            <span>Pandas</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill