import logo from '../assets/img/logo.png'

export default function Initial({tela, setTela}) {
    return (
        <div className="initial">
            <img src={logo} alt='logo'/>
            <h1>ZapRecall</h1>
            <div className="button" onClick={() => setTela(!tela)}>
                <p>Iniciar Recall!</p>
            </div>
        </div>
    )
}