import Skills from "./Skills";
import Resume from "./Resume";
import About from "./About";
function Main(){
    return(
        <>
        <div id="about">        
            <About/>
            <Skills/>
        </div>
        <Resume/>
        </>
    )
}
export default Main;