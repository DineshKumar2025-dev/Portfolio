function Resume(){
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
                        <div className="col-md-6 p-2">
                            <div className="card bg-transparent p-2">
                                <span className="secondary-text fw-bold">2024 - Present</span>
                                <h2 className="primary-text">Junior web-developer</h2>
                                <span className="info-text">AmerinD Data Solutions</span>
                                <p className="mt-4 info-text">Merkle, a leading CXM and media company with over 10K+ professionals globally. It's a part of Dentsu International. 
                                    <ul>
                                        <li>Analysed ad campaigns, clickstream, and customer surveys data, identified an increasing demand and launched a strategic product line.</li>
                                        <li>Developed time series forecasting models to predict sales and optimize marketing budgets, got model performance of 92%.</li>
                                        <li>Designed and executed A/B tests, performed rigorous statistical analysis. Led to 20% MoM increase in the conversion rate.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-2">
                            <div className="card bg-transparent p-2">
                                <span className="secondary-text fw-bold">2024</span>
                                <h2 className="primary-text">PHP Developer</h2>
                                <span className="info-text">Vedya infotech</span>
                                <p className="mt-4 info-text">iQuanti is a data-driven digital marketing analytics and solutions company, helps top 100 global brands. 
                                    <ul>
                                        <li>Performed in-depth market research and analysis to create online pages. Resulted in ~100% website growth and 30% increase in conversion rate YoY.</li>
                                        <li>Delivered multiple training and mentorship sessions on analytical tools like SQL, MS Excel, Power BI, Tableau and Python.</li>
                                        <li>Performed migration and enhancements for merchandising dashboard, involved data integration and its feature improvement.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h1 className="primary-text text-center fw-bold">Education</h1>
                        <div className="underline"></div>
                    </div>		
                    <div className="row">
                        <div className="col-md-6 p-2">
                            <div className="card bg-transparent p-2">
                                <span className="secondary-text fw-bold">2014-2018</span>
                                <h2 className="primary-text">Bachelor of Engineering</h2>
                                <span className="info-text">Visvesvaraya Technological University</span>
                                <p className="info-text">Grade: First className distinction.</p>
                            </div>
                        </div>

                        <div className="col-md-6 p-2">
                            <div className="card bg-transparent p-2">
                                <span className="secondary-text fw-bold">2012-2013</span>
                                <h2 className="primary-text">Higher Secondary School</h2>
                                <span className="info-text">Army Public School</span>
                                <p className="info-text">Grade: First className distinction.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6 text-center ftco-animate">
                            <p><a href="geetharesume.pdf" download="resume.pdf"  className="btn resume fw-bold">Download CV</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Resume;