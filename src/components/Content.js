import Questions from "./Questions"

export default function Content() {
    return (
        <>
            <div className="content">
                <div className="topo">
                    <img src='./img/logo-pequeno.png' alt='logopequeno'/>
                    <h1>ZapRecall</h1>
                </div>

                <Questions />
                
            </div>

            <div className="footer">
                <p>0/4 CONCLUÍDOS</p>
            </div>
        </>
    )
}