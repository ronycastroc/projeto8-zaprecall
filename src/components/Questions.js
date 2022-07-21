function Question({number, question, answer}) {
    return (
        <div className="question">
            <p>Pergunta {number +1}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}

const zapcard = [
    {
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript'
    },

    {
        question: 'O React é __ ',
        answer: 'uma biblioteca JavaScript para construção de interfaces'
    },

    {
        question: 'Componentes devem iniciar com __ ',
        answer: 'letra maiúscula'
    },

    {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões'
    }
]

export default function Questions() {
    return (
        <div className="questions">
            {zapcard.map((value, index) => (
                <Question key={index} number={index} question={value.question} answer={value.answer}/>
            ))}
        </div>
    )
}