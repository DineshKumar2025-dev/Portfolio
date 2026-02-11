function Skills() {
    return(
        <>
        <section className="container d-flex py-5">
            <div className="w-50">
                <div className="primary-text position-relative">
                    <p className="subtitle">My Skills</p>
                    <h3>WHAT MY<br/>PROGRAMMING SKILLS <br/>INCLUDED? </h3>
                    <p style={{color: "rgb(158 158 158)" }}>With expertise in frontend development, backend development, multiple databases, I possess a diverse range of skills that enable me to create applications that deliver an exceptional user experience while maintaining robust and reliable performance.</p>
                </div>
                <nav>
                <div className="mx-auto text-sm md:text-base font-bold skills-toggle font-poppins gap-1"id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-tech-tab" data-bs-toggle="tab" data-bs-target="#nav-tech" type="button" role="tab" aria-controls="nav-tech" aria-selected="true">Tech</button>
                    <button className="nav-link" id="nav-Data-tab" data-bs-toggle="tab" data-bs-target="#nav-Data" type="button" role="tab" aria-controls="nav-Data" aria-selected="false">Data Base</button>
                    <button className="nav-link" id="nav-tools-tab" data-bs-toggle="tab" data-bs-target="#nav-tools" type="button" role="tab" aria-controls="nav-tools" aria-selected="false">Tools</button>
                    <button className="nav-link" id="nav-Lybraries-tab" data-bs-toggle="tab" data-bs-target="#nav-Lybraries" type="button" role="tab" aria-controls="nav-Lybraries" aria-selected="false">Lybraries & Frame works</button>
                </div>
                </nav>
            </div>
            <div className="w-50">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-tech" role="tabpanel" aria-labelledby="nav-tech-tab">
                        <div className="container">
                            <ul className="skill-box d-flex flex-wrap gap-5">
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/html5-plain.svg" alt="HTML5" className="img-fluid"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/css3-plain.svg" alt="CSS3" className="img-fluid"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/python-2.svg" alt="python" className="img-fluid"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/new-php-logo.svg" alt="Php" className="img-fluid"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/jquery-svgrepo-com.svg" alt="j-query" className="img-fluid"/>
                                    </div>
                                </li>

                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/react-original-wordmark.svg" alt="React" className="img-fluid"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/javascript-plain.svg" alt="JS" className="img-fluid"/>
                                    </div>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-Data" role="tabpanel" aria-labelledby="nav-Data-tab">
                        <div className="container">
                            <ul className="skill-box d-flex flex-wrap gap-5">
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/mysql-3.svg" alt="SQL" className="img-fluid"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/postgresql.svg" alt="PG-SQL" className="img-fluid"/>
                                    </div>
                                </li>                              
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-tools" role="tabpanel" aria-labelledby="nav-tools-tab">
                        <div className="container">
                            <ul className="skill-box d-flex flex-wrap gap-5">
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/mysql-3.svg" alt="SQL" className="img-fluid"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="skill-card">
                                        <img src="Attachments/images/postgresql.svg" alt="PG-SQL" className="img-fluid"/>
                                    </div>
                                </li>                              
                            </ul>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-Lybraries" role="tabpanel" aria-labelledby="nav-lybraries-tab"><p className="primary-text">d</p></div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Skills