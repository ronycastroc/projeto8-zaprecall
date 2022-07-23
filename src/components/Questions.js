import React from "react"
import TurnCard from "./TurnCard"

function Question({number, question, answer, counter, setCounter, accept, setAccept, result, setResult}) {
    const [card, setCard] = React.useState(true)
    const [click, setClick] = React.useState('question-p')
    const [name, setName] = React.useState('play-outline')
    const [color, setColor] = React.useState('')
    

    
    return (
        <>
            {card ? (
            <div className="question">
                <p className={click}>Pergunta {number +1}</p>
                <ion-icon class={color} name={name} onClick={() => setCard(!card)}></ion-icon>
            </div>
            ) : 
            
            (<TurnCard question={question} answer={answer} setCard={setCard} setClick={setClick} setName={setName} setColor={setColor} counter={counter} setCounter={setCounter} accept={accept} setAccept={setAccept} result={result} setResult={setResult}/>)}
        </>
        
    )
}

const zapcard = [
    {
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript'
    },

    {
        question: 'O React é __ ',
        answer: 'Uma biblioteca JavaScript para construção de interfaces'
    },

    {
        question: 'Componentes devem iniciar com __ ',
        answer: 'Letra maiúscula'
    },

    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'Expressões'
    },

    {
        question: 'O ReactDOM nos ajuda __',
        answer: 'Interagindo com a DOM para colocar componentes React na mesma'
    },

    {
        question: 'Usamos o npm para __',
        answer: 'Gerenciar os pacotes necessários e suas dependências'
    },

    {
        question: 'Usamos props para __ ',
        answer: 'Passar diferentes informações para componentes '
    },

    {
        question: 'Usamos estado (state) para __',
        answer: 'Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'
    },
]

export default function Questions({counter, setCounter, accept, setAccept, result, setResult}) {
        
    zapcard.sort(comparador)
    function comparador() {
        return Math.random() - 0.5;
    }
    
    return (
            
        <div className="questions">
            {zapcard.map((value, index) => {
                if(index < 4) {
                    return (
                        <Question key={index} number={index} question={value.question} answer={value.answer} counter={counter} setCounter={setCounter} accept={accept} setAccept={setAccept} result={result} setResult={setResult}/>
                    )
                }
            })}       
        </div>
    )
}