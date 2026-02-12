function About(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-start ">
                    <div className="profile-img-wrapper">
                        <img 
                            src="Attachments/profile.jpg" 
                            alt="profile" 
                            className="profile-img"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="position-relative primary-text w-75">
                        <p className="subtitle">About me</p>
                        <h3>
                            Looking to build something truly extraordinary?
                        </h3>
                        <p className="info-text">
                            I am a proficient and passionate full stack software engineer with over 2 years of experience developing a wide range of projects with varying levels of complexity. My eagerness to learn new things is only matched by my desire to advance alongside driven and ambitious individuals. Through my work, I strive to craft digital experiences that exceed user expectations, leaving a lasting impression of quality and innovation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default About;