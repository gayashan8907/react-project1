import Header from "./Header"
import CoreConcepts from "./CoreConcepts"
import {angularConcepts} from "./data.js"
import { angularExamples } from "./data.js"
import Buttons from "./Buttons.jsx"
import { useState } from "react"
export default function App(){
    const [afterclick,setClick]=useState("")
    function handleClick(selectButton){
        setClick(selectButton)
    }
    return(
        <>
        <Header/>
        <section id="core-concepts">
            <ul>
                {angularConcepts.map(item=><CoreConcepts key={item.concept}{...item}/>)}
            </ul>
        </section>
        <section id="examples">
        <h2>Examples</h2>
        <menu>
            <Buttons isClicked={()=>handleClick('Module')} label='Module'></Buttons>
            <Buttons isClicked={()=>handleClick('Component')} label='Component'></Buttons>
            <Buttons isClicked={()=>handleClick('Data')} label='Data Binding'></Buttons>
            <Buttons isClicked={()=>handleClick('Directive')} label='Directive'></Buttons>
            <Buttons isClicked={()=>handleClick('Service')} label='Service'></Buttons>
            <Buttons isClicked={()=>handleClick('Routing')} label='Routing'></Buttons>
            <Buttons isClicked={()=>handleClick('Pipes')} label='Pipes'></Buttons>
            <Buttons isClicked={()=>handleClick('Dependency')} label='Dependency Injection'></Buttons>
            
        </menu>
        {!afterclick && <p>Select a button</p>}
        {afterclick && <div id="tab">
            <h3>{angularExamples[afterclick].concept}</h3>
            <p>{angularExamples[afterclick].explanation}</p>
            <pre><code>{angularExamples[afterclick].example}</code></pre>

            </div> }
            

        </section>
        
        </>
    )
}