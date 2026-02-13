import Skills from "./Skills";
import Resume from "./Resume";
import About from "./About";
import Project from "./Projects";
import Contact from "./Contact"
function Main(){
    return(
        <>
        <section id="about">        
            <About/>
            <Skills/>
        </section>
        <Resume/>
        <Project/>
        <Contact/>
        </>
    )
}
export default Main;