import {  useState } from "react";
import emailjs from "@emailjs/browser";
function Contact(){
const [name,setName]=useState("")
const [email,setemail]=useState("")
const [message,setmessage]=useState("")
function SendMessage(e) {
  e.preventDefault();
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };
  console.log(templateParams);
  emailjs
    .send(
      "service_ywx3l1m",   //service
      "template_3po1f3u",  // template
      templateParams,
      "Ib9RhXM0QOyMBQ2hL"    // public key
    )
    .then(
      (response) => {
        alert("Message Sent Successfully ✅");
        setName("");
        setemail("");
        setmessage("");
      },
      (error) => {
        alert("Some thing went wrong please try later");
        console.log(error);
      }
    );
}

    return(
        <>
        <section id="contact-section">
        <div className="container">
            <div className="row justify-content-center pb-5 positon-relative">
            <div className="col-md-10 heading-section text-center">
                <h1 className="back-heading">Contact</h1>
                <h2 className="mb-4 primary-text h1 fw-bold">Contact Me</h2>
                <p className="info-text">Below are the details to reach out to me!</p>
            </div>
            </div>
            <div className="row d-flex contact-info mb-5">
                <div className="col d-flex justify-content-center">
                    <div className="p-4 text-center">
                        <div className="d-flex justify-content-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <img src="Attachments/images/telephone.svg"></img>
                            </div>
                        </div>
                        <h3 className="mb-4 primary-text">Contact Number</h3>
                        <p className="info-text"><a href="tel://9346758028" className="text-decoration-none">9346758028</a></p>
                    </div>
                </div>
                <div className="col d-flex justify-content-center ">
                    <div className="p-4 text-center">
                        <div className="d-flex justify-content-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                                <img src="Attachments/images/envelope.svg"></img>
                            </div>
                        </div>
                        <h3 className="mb-4 primary-text">Email Address</h3>
                        <p className="info-text"><a href="mailto:dharmavarapudineshkumar@gmail.com" className="text-decoration-none">dharmavarapudineshkumar@gmail.com</a></p>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <div className="p-4 text-center">
                        <div className="d-flex justify-content-center">
                            <div className="icon d-flex align-items-center justify-content-center">
                            <img src="Attachments/images/globe.svg"></img>
                        </div>
                        </div>                    
                        <h3 className="mb-4 primary-text">Download Resume</h3>
                        <p className="info-text"><a href="Attachments/Dharmavarapu_Dinesh_kumar.pdf" target="_blank" className="text-decoration-none">Download Resume</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact container w-75">
            <div className="row">
                <div className="col-md-6">
                    <div className="position-relative primary-text w-75">
                        <p className="subtitle">Contact</p>
                        <h3>
                            Got Any Project?<br></br>Please Drop a Message
                        </h3>
                        <p className="info-text">
                            I'm always excited to hear about interesting opportunities, and build valuable connections. Let's connect!
                        </p>
                        <div className="">
                            <div className="">
                                <div >
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <img src="Attachments/images/envelope.svg"></img>
                                    </div>
                                </div>
                                <h3 className="primary-text">Email Address</h3>
                                <p className="info-text"><a href="mailto:dharmavarapudineshkumar@gmail.com" className="text-decoration-none">dharmavarapudineshkumar@gmail.com</a></p>
                            </div>
                            <div className="">
                                <div >
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <img src="Attachments/images/envelope.svg"></img>
                                    </div>
                                </div>
                                <h3 className="primary-text">Socials</h3>
                                <div className="d-flex gap-1">
                                    <a href="https://github.com/DineshKumar2025-dev?tab=repositories" target="_blank"><img src="Attachments/images/github-icon.svg" alt="github"></img></a>
                                    <a href="https://www.linkedin.com/in/dinesh-kumar-aa1849240" target="_blank"><img src="Attachments/images/linkedin-icon.svg" alt="linkedin"></img></a>
                                </div>                                
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="col-md-6">
                    <form className="mb-3 bg-dark">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" id="email" placeholder="name@example.com" required value={email} onChange={e=>setemail(e.target.value)}/>
                        <label for="name" className="form-label">Name</label>
                        <input type="text" id="name" placeholder="Dinesh" required value={name} onChange={e=>setName(e.target.value)}/>
                        <label for="message" className="form-label">Massage</label>
                        <textarea  id="message" rows="3" required placeholder="Write message..." value={message} onChange={e=>setmessage(e.target.value)}></textarea>
                        <button className="dd-strong w-100 py-2 fs-4" type="button" onClick={SendMessage}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
        </>
    )
} 
export default Contact;