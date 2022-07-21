export default function Initial({tela, setTela}) {
    return (
        <div className="initial">
            <img src='./img/logo.png'alt='logo'/>
            <h1>ZapRecall</h1>
            <div className="button" onClick={() => setTela(!tela)}>
                <p>Iniciar Recall!</p>
            </div>
        </div>
    )
}