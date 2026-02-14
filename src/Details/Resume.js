import { useState } from "react";
const Amerind = [
    "Collaborated closely with backend developers and business stakeholders to build interactive, accessible, and user-focused web applications using React, Bootstrap 5, SCSS, and CFML.",
    "Handled and resolved tickets raised by Quality Assurance teams and clients, ensuring smooth product functionality and timely issue resolution.",
    "Ensured the entire application was cross-browser compatible, fully responsive, and delivered a seamless user experience across all devices and browsers.",
    "Conducted knowledge transfer sessions on WCAG accessibility tools and standards, enabling faster and more effective quality analysis while improving overall client outcomes.",
    "Developed and maintained reusable UI components and styling frameworks using React and SCSS, improving code maintainability and performance."
    ];
const Vedya =[
    "Collaborated with cross-functional teams to identify common functionalities and reusable styles using PHP, CSS, and jQuery, enabling efficient and scalable application development.",
    "Identified recurring issues, troubleshot root causes, and implemented fixes using AJAX-driven solutions, reducing redundancy and improving overall system reliability and performance.",
    "Led migration and enhancement activities for the merchandising dashboard, handling data integration, backend processing in PHP, and front-end feature improvements to deliver a more robust and user-friendly system.",
    ];
function Resume(){
    const [Amerindsolutions]=useState(Amerind); 
    const [Vedyasolutions]=useState(Vedya); 
    return(
        <>
            <section id="resume-section">
                <div className="container">
                    <div className="row justify-content-center pb-5 positon-relative">
                        <div className="col-md-10 heading-section text-center">
                            <h1 className="back-heading">Resume</h1>
                            <h2 className="mb-4 primary-text h1 fw-bold">Resume</h2>
                            <p className="info-text">Seasoned Senior Data Analyst with 5+ years of experience driving business strategies through data-driven insights. Proven expertise in data science, statistical analysis, machine learning algorithms and project management.</p>
                        </div>
                    </div>
                    <div className="row">
                        <h1 className="primary-text text-center fw-bold">Experience</h1>
                        <div className="underline"></div>
                    </div>		
                    <div className="row pb-5">
                        <div className="col-md-6 p-2 d-flex">
                            <div className="card bg-transparent p-2 h-100">
                                <span className="secondary-text fw-bold">2024 - Present</span>
                                <h2 className="primary-text">Junior web-developer</h2>
                                <span className="info-text">Amerind Data Solutions</span>
                                <p className="mt-4 info-text">“Amerind Data Solutions is an EHS-based company that collaborates with many universities, laboratory professionals, and insurance data providers.”
                                    <ul>
                                       {Amerindsolutions.map((skill, index) => (
                                            <li key={index}>
                                                {skill}
                                            </li>
                                        ))} 
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-2 d-flex">
                            <div className="card bg-transparent p-2 h-100">
                                <span className="secondary-text fw-bold">2024</span>
                                <h2 className="primary-text">PHP Developer</h2>
                                <span className="info-text">Vedya infotech</span>
                                <p className="mt-4 info-text">Vedya Infotech is a service-based organization specializing in delivering tailored application development and support services to meet diverse client requirements. 
                                    <ul>
                                        {Vedyasolutions.map((skill, index) => (
                                            <li key={index}>
                                                {skill}
                                            </li>
                                        ))} 
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <h1 className="primary-text text-center fw-bold">Education</h1>
                        <div className="underline"></div>
                    </div>		
                    <div className="row">
                        <div className="col-md-6 p-2">
                            <div className="card bg-transparent p-2">
                                <span className="secondary-text fw-bold">2020-2024</span>
                                <h2 className="primary-text">Bachelor of Engineering</h2>
                                <span className="info-text">Avanthi institute of Engineering and technologie</span>
                                <p className="info-text">Computer science and engineering – Data Science,</p>
                            </div>
                        </div>

                        <div className="col-md-6 p-2">
                            <div className="card bg-transparent p-2">
                                <span className="secondary-text fw-bold">2018-2020</span>
                                <h2 className="primary-text">Higher Secondary School</h2>
                                <span className="info-text">Narayana Junior Collage</span>
                                <p className="info-text">MPC</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 text-center ftco-animate">
                            <p><a href="Attachments/Dharmavarapu_Dinesh_kumar.pdf" target="_blank" rel="noopener noreferrer"className="btn resume fw-bold">  View Resume</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Resume;