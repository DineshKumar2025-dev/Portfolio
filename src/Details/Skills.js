import { Tooltip } from "bootstrap";
import { useEffect } from "react";
function Skills() {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltipTriggerList.forEach(el => new Tooltip(el));
        }, []);
    return(
        <>
        <section className="container d-flex py-5" id="skills">
            <div className="row">
                <div className="col-12 col-lg-6 box">
                    <div className="primary-text position-relative">
                        <p className="subtitle">My Skills</p>
                        <h3>WHAT MY<br/>PROGRAMMING SKILLS <br/>INCLUDED? </h3>
                        <p style={{color: "rgb(158 158 158)" }}>With expertise in frontend development, backend development, multiple databases, I possess a diverse range of skills that enable me to create applications that deliver an exceptional user experience while maintaining robust and reliable performance.</p>
                    </div>
                    <nav className="d-flex justify-content-center">
                    <div className="font-bold skills-toggle font-poppins gap-1"id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-tech-tab" data-bs-toggle="tab" data-bs-target="#nav-tech" type="button" role="tab" aria-controls="nav-tech" aria-selected="true">Tech</button>
                        <button className="nav-link" id="nav-Data-tab" data-bs-toggle="tab" data-bs-target="#nav-Data" type="button" role="tab" aria-controls="nav-Data" aria-selected="false">Data Base</button>
                        <button className="nav-link" id="nav-tools-tab" data-bs-toggle="tab" data-bs-target="#nav-tools" type="button" role="tab" aria-controls="nav-tools" aria-selected="false">Tools</button>
                        <button className="nav-link" id="nav-tools-tab" data-bs-toggle="tab" data-bs-target="#nav-AI" type="button" role="tab" aria-controls="nav-AI" aria-selected="false">AI</button>
                    </div>
                    </nav>
                </div>
                <div className="col-12 col-lg-6 box pt-5">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-tech" role="tabpanel" aria-labelledby="nav-tech-tab">
                            <div className="container">
                                <ul className="skill-box d-flex flex-wrap gap-5">
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="HTML-5">
                                            <img src="Attachments/images/html5-plain.svg" alt="HTML5" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="CSS-3">
                                            <img src="Attachments/images/css3-plain.svg" alt="CSS3" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Python">
                                            <img src="Attachments/images/python-2.svg" alt="python" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="PHP">
                                            <img src="Attachments/images/new-php-logo.svg" alt="Php" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="J-Query">
                                            <img src="Attachments/images/jquery-svgrepo-com.svg" alt="j-query" className="img-fluid"/>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="React.JS">
                                            <img src="Attachments/images/react-original-wordmark.svg" alt="React" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript">
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
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="SQL">
                                            <img src="Attachments/images/mysql-3.svg" alt="SQL" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Poatgresql">
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
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="PEGA">
                                            <img src="Attachments/images/pega.jpeg" alt="Pega" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="VS-Code">
                                            <img src="Attachments/images/Vs-code.svg" alt="vs-code" className="img-fluid"/>
                                        </div>
                                    </li>  
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Git">
                                            <img src="Attachments/images/git.svg" alt="git" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Git-Hub">
                                            <img src="Attachments/images/github-1.svg" alt="git-hub" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Sublime-Text">
                                            <img src="Attachments/images/sublime-text-icon.svg" alt="sublime" className="img-fluid"/>
                                        </div>
                                    </li> 
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Jupyter">
                                            <img src="Attachments/images/jupyter.svg" alt="jupyter" className="img-fluid"/>
                                        </div>
                                    </li>                              
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-Lybraries" role="tabpanel" aria-labelledby="nav-lybraries-tab">
                            <div className="container">
                                <ul className="skill-box d-flex flex-wrap gap-5">
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Numpy">
                                            <img src="Attachments/images/numpy-2.svg" alt="numpy" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="tailwindcss">
                                            <img src="Attachments/images/tailwindcss-plain.svg" alt="tilewind" className="img-fluid"/>
                                        </div>
                                    </li>  
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="BS-5">
                                            <img src="Attachments/images/bootstrap-5-logo-icon.svg" alt="bs5" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="SCSS">
                                            <img src="Attachments/images/scss.svg" alt="SCSS" className="img-fluid"/>
                                        </div>
                                    </li>                             
                                </ul>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-AI" role="tabpanel" aria-labelledby="nav-AI-tab">
                            <div className="container">
                                <ul className="skill-box d-flex flex-wrap gap-5">
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Numpy">
                                            <img src="Attachments/images/numpy-2.svg" alt="numpy" className="img-fluid"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Open-CV">
                                            <img src="Attachments/images/opencv-2.svg" alt="open-cv" className="img-fluid"/>
                                        </div>
                                    </li>  
                                    <li>
                                        <div className="skill-card" data-bs-toggle="tooltip" data-bs-placement="top" title="Pandas">
                                            <img src="Attachments/images/pandas.svg" alt="pandas" className="img-fluid"/>
                                        </div>
                                    </li>                                                          
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Skills