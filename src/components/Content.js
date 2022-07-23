import React from "react"
import Questions from "./Questions"
import Congrat from "./Congrat"

export default function Content() {
    const [counter, setCounter] = React.useState(0)
    const [accept, setAccept] = React.useState(0)

    

    return (
        <>
            <div className="content">
                <div className="topo">
                    <img src='./img/logo-pequeno.png' alt='logopequeno'/>
                    <h1>ZapRecall</h1>
                </div>

                <Questions counter={counter} setCounter={setCounter} accept={accept} setAccept={setAccept}/>

            </div>
            
            <div className="footer">  
            
                <Congrat counter={counter} setCounter={setCounter} accept={accept} setAccept={setAccept}/>

                 
            </div>
          
        </>
    )
}