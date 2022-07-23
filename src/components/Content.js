import React from "react"
import Questions from "./Questions"
import Congrat from "./Congrat"
import logoSmall from '../assets/img/logo-pequeno.png'



export default function Content() {
    const [counter, setCounter] = React.useState(0)
    const [accept, setAccept] = React.useState(0)
    const [result, setResult] = React.useState([])  
   
    

    return (
        <>
            <div className="content">
                <div className="topo">
                    <img src={logoSmall} alt='logopequeno'/>
                    <h1>ZapRecall</h1>
                </div>

                <Questions counter={counter} setCounter={setCounter} accept={accept} setAccept={setAccept} result={result} setResult={setResult}/>

            </div>
            
            <div className="footer">  
            
                <Congrat counter={counter} setCounter={setCounter} accept={accept} setAccept={setAccept}/>
                
                <div className="icon">
                    {result.map((value, index) => {
                        if(index < result.length) {
                            return (                                
                                <ion-icon key={index} class={value.color} name={value.name}></ion-icon>
                            )
                        }
                    })} 
                </div>
                
            </div>
          
        </>
    )
}