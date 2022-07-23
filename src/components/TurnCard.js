import React from "react"

export default function TurnCard({question, answer, setCard, setClick, setName, setColor, counter, setCounter, accept, setAccept}) {
    
    const [turncard, setTurncard] = React.useState(true)
    

    return (
        <div className="turncard">
            
            {turncard ? (
            <>
                <p>{question}</p>
                <img src="./img/setinha.png" alt="setinha" onClick={() => setTurncard(!true)}/>
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
                    }}>
                        <p>Zap!</p>
                    </div>
                </div>
            </>
            )}

        </div>
    )
}