import React from 'react';
import './exp.css';

const Experience = () => {
    return (
        <section id="exp">
            <span className="expname">Professional Experience</span>
            <div className="line"></div>
            <div className="expBars">
                <div className="expBar border1">
                    <div className="expBarText">
                        <div className="jobTitle">
                            <h2>Data Analyst and Business Intelligence Engineer</h2>
                            <h3>- Ground Effects</h3>
                        </div>
                        <h1>January 2025 - Present</h1>
                        <p>
                            - Developed and automated Python scripts for ETL, data validation, and workflow optimization, reducing manual intervention by 50% and ensuring scalable, high-integrity data pipelines. <br />
                            - Mastered Snowflake, SSMS, and SQL to manage and query large-scale datasets, performing advanced data cleaning, transformation, and validation, resulting in a 99% increase in data accuracy and enhanced business insights. <br />
                            - Designed and maintained 10+ dynamic Tableau dashboards for real-time KPI tracking, executive reporting, and operational analysis, cutting manual reporting efforts by 40% and accelerating data-driven decisions. <br />
                            - Collaborated cross-functionally to implement data-driven solutions, improving BI workflows, aligning reporting with strategic goals, and boosting operational efficiency by 30%.
                        </p>
                    </div>
                </div>

                <div className="expBar border2">
                    <div className="expBarText">
                        <div className="jobTitle">
                            <h2>Software Engineer</h2>
                            <h3>- Vision Mechatronics Pvt Ltd</h3>
                        </div>
                        <h1>October 2022 - April 2023</h1>
                        <p>
                            - Developed Python modules and custom machine learning algorithms for pattern recognition and behaviour tagging in lithium-ion battery sensor data, enabling real-time anomaly detection and threshold breach identification. <br />
                            - Implemented a real-time monitoring dashboard using Django, reducing manual oversight by 18+ hours/week and supporting over 15 international clients with automated data tracking and alerting. <br />
                            - Processed and analysed 1M+ data points for battery performance modelling, enabling data-driven insights that improved battery life prediction accuracy by 30%.
                        </p>
                    </div>
                </div>

                <div className="expBar border3">
                    <div className="expBarText">
                        <div className="jobTitle">
                            <h2>Data Analyst</h2>
                            <h3>- Sureprep Pvt Ltd</h3>
                        </div>
                        <h1>June 2022 - August 2022</h1>
                        <p>
                            - Leveraged advanced data analysis techniques to identify key business trends, resulting in actionable insights that improved operational efficiency by 30% and influenced strategic decision-making. <br />
                            - Developed and deployed automated reporting tools using SQL and Power BI, streamlining business intelligence workflows and reducing manual reporting time by 35%, enabling real-time performance monitoring. <br />
                            - Collaborated with stakeholders to design custom dashboards and analytics solutions, enhancing business strategy alignment and delivering insights that improved decision-making speed and sales performance by 25%.
                        </p>
                    </div>
                </div>

                <div className="expBar border3">
                    <div className="expBarText">
                        <div className="jobTitle">
                            <h2>Python Developer</h2>
                            <h3>- Mira Advance Engineering</h3>
                        </div>
                        <h1>August 2023 - October 2023</h1>
                        <p>
                            - Worked as a Python Developer Intern contributing to multiple projects within strict deadlines. <br />
                            - Created demonstration videos to explain code functionality, ensuring effective knowledge transfer across the team. <br />
                            - Promoted technical clarity and supported collaborative success through well-documented, shareable content.
                        </p>
                    </div>
                </div>
            </div>

            <a
                href="https://www.linkedin.com/in/harsh-dhandukiya-b460081ab/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="viewExpButton">View Experience on LinkedIn</button>
            </a>
        </section>
    );
};

export default Experience;
