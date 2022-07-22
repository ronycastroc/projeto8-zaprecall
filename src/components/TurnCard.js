import React from "react"

export default function TurnCard({question, answer, setCard, setClick, setName, setColor}) {
    
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
                    }}>
                        <p>Não lembrei</p>
                    </div>
                    <div className="almost-remember" onClick={() => {
                        setClick('question-p orange')
                        setCard(true)
                        setName('help-circle')
                        setColor('orange')
                    }}>
                        <p>Quase lembrei</p>
                    </div>
                    <div className="zap" onClick={() => {
                        setClick('question-p green')
                        setCard(true)
                        setName('checkmark-circle')
                        setColor('green')
                    }}>
                        <p>Zap!</p>
                    </div>
                </div>
            </>
            )}

        </div>
    )
}