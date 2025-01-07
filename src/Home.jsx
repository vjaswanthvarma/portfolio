import React from "react"
import Header from "./Header"
import Main from "./Main"
import Skill from "./Skills"
import Projects from "./Projects"
import Internships from "./Internships"
import Contact from "./Contact"
import context, { Provider } from "./context";
import Education from "./Education"
export default function Home(){
    var[data,setdata]=React.useState(true);
    function set(){
            setdata(!data);
    }
    return(<>
    <div style={{backgroundColor:data?'white':'black'}}>
    <Provider value={data}> 
    <Header method={set} />
        <Main />
        <Skill />
        <Education />
        <Projects />
        <Internships />
        <Contact />
        </Provider>
    </div>   
    </>
    )
}
