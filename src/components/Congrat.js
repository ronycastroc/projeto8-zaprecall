export default function Congrat({counter, setCounter, accept, setAccept}) {
   
    if (counter === 4 && accept === 4 ) {
        return (        
            <>      
                 <div className="congrat">
                     <img src="./img/party.png" alt="party" />
                     <h2>Parabéns!</h2>
                 </div>
 
                 <p>Você não esqueceu de nenhum flashcard!</p>  

                 <span>{counter}/4 CONCLUÍDOS</span> 
 
             </>  
     ) 
    }

    else if (counter === 4 && accept < 4) {
        return (
            <>    
                <div className="congrat">
                     <img src="./img/sad.png" alt="party" />
                     <h2>Putz...</h2>
                </div>
 
                <p>Ainda faltam alguns... Mas não desanime!</p>

                <span>{counter}/4 CONCLUÍDOS</span> 
            </>                  
        )
    }
    
    else {
        return (
            <>    
               <span>{counter}/4 CONCLUÍDOS</span>  
            </>                  
        )
    }
    
}