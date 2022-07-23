import React from "react"
import seta from '../assets/img/setinha.png'

export default function TurnCard({question, answer, setCard, setClick, setName, setColor, counter, setCounter, accept, setAccept, result, setResult}) {
    
    const [turncard, setTurncard] = React.useState(true)    

    return (
        <div className="turncard">
            
            {turncard ? (
            <>
                <p>{question}</p>
                <img src={seta} alt="setinha" onClick={() => setTurncard(!true)}/>
            </>
            ) : 

            (
            <>
                <p>{answer}</p>
                <div className="remember">
                    <div className="dont-remember" onClick={() => {
                        setClick('question-p red')
                        setCard(true)
                        setName('close-circle')
                        setColor('red')
                        setCounter(counter + 1)
                        const newResult = [...result, {name:'close-circle', color:'red'}]
                        setResult(newResult)
                    }}>
                        <p>Não lembrei</p>
                    </div>
                    <div className="almost-remember" onClick={() => {
                        setClick('question-p orange')
                        setCard(true)
                        setName('help-circle')
                        setColor('orange')
                        setCounter(counter + 1)
                        setAccept(accept + 1)
                        const newResult = [...result, {name: 'help-circle', color: 'orange'}]
                        setResult(newResult)
                    }}>
                        <p>Quase lembrei</p>
                    </div>
                    <div className="zap" onClick={() => {
                        setClick('question-p green')
                        setCard(true)
                        setName('checkmark-circle')
                        setColor('green')
                        setCounter(counter + 1)
                        setAccept(accept + 1)
                        const newResult = [...result, {name: 'checkmark-circle', color: 'green'}]
                        setResult(newResult)
                    }}>
                        <p>Zap!</p>
                    </div>
                </div>
            </>
            )}

        </div>
    )
}