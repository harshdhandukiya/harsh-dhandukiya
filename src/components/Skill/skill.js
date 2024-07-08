import React from 'react';
import './skill.css';
import DA from '../../assets/DA.png';
import PL from '../../assets/PL.png';
import DV from '../../assets/DV.png';
import EE from '../../assets/EE.png';

const Skill = () => {
    return(
        <section id = "skill">
            <span className='skillTittle'> What I do</span><br/>
            <div className="line"></div>
            <span className='skillDescription'> I'm passionate about starting my career in the data analytics field. I have solid expertise in SQL and Python for data science, including Pandas and Numpy. I'm also proficient in regular Python programming and adept at using Excel for data manipulation. Additionally, I have hands-on experience with data visualization tools like Tableau and Power BI, allowing me to create insightful and impactful visual reports. </span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src ={DA} alt ="DataAnalysis" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Data Analysis</h2>
                        <p>I specialize in analyzing data using SQL and Python. I'm also familiar with data science libraries such as Pandas, Numpy, Matplotlib and Seaborn. I can efficiently clean, manipulate, and interpret complex datasets to provide actionable insights.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src ={PL} alt ="ProgrammingLanguage" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Programming Expertise</h2>
                        <p>With extensive knowledge in both Python and SQL, I develop robust scripts and queries to streamline data processing and analysis. My expertise allows me to effectively manage databases, perform complex data extractions, and build powerful analytical tools to solve real-world problems.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src ={DV} alt ="DataVisualization" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Data Visualization</h2>
                        <p>I have profound knowledge and expertise working with data visualization tools such as Power BI and Tableau to create compelling data visualization dashboards to help present data in a clear and impactful way, making it easier for stakeholders to understand key metrics and trends.</p>
                    </div>
                </div>
                <div className='skillBar'>
                    <img src ={EE} alt ="ExcelExpertise" className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Excel Expertise</h2>
                        <p>Leveraging my advanced skills in Microsoft Excel, I transform raw data into meaningful insights through dynamic dashboards and complex analytical models, enabling data-driven decision-making and strategic planning.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill