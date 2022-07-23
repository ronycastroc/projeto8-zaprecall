import React from 'react'
import Initial from './Initial'
import Content from './Content'

export default function App() {
    const [tela, setTela] = React.useState(true); 

    return (
        <>
            {
            tela ? (<Initial tela={tela} setTela={setTela}/>) : 
            (<Content />) 
            }              
        </>       
    )
}

