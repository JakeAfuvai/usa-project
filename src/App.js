import React, { useState, useEffect } from "react"
import StateBorders from "./StateBorders"
import County from "./County"
import counties from "./counties"
import "./App.css"
const App = () => {
    const [ mapData ] = useState(counties)
    useEffect(()=>mapData.forEach((county, i)=>county.population = i + 1), [mapData])
    const stateBorders = mapData.find(element => element.id === "_state_borders")
    const countyPaths = mapData.filter(element => element.id !== "_state_borders").map((county, i) => <County key={county.id} countyData={county} population={Math.ceil(Math.random() *10)}/>)
    console.log(countyPaths[1])
    return (
        <svg viewBox="0 0 988.36 626.69">
            {countyPaths}   
            <StateBorders borderData={stateBorders} /> 
        </svg>
    )
}

export default App