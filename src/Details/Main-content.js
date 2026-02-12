import Skills from "./Skills";
import Resume from "./Resume";
import About from "./About";
import Project from "./Projects";
function Main(){
    return(
        <>
        <section id="about">        
            <About/>
            <Skills/>
        </section>
        <Resume/>
        <Project/>
        </>
    )
}
export default Main;