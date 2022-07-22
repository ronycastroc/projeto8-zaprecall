import React from 'react'
import Initial from './Initial'
import Content from './Content'

export default function App() {
    const [tela, setTela] = React.useState(true); 

    return (
        <>
            {
            tela ? (<Content tela={tela} setTela={setTela}/>) : 
            (<Initial />) // ordem mudada content e initial para trabalhar melhor
            }              
        </>       
    )
}

