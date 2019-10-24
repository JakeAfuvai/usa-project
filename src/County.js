import React from "react"

const County = props => {
    const { county, state, d, transform } = props.countyData
    const colorCounty = props.population < 3 ? {fill: "#F0F2F2"} : props.population > 2 && props.population < 6 ? {fill: "#B4C4D9"} : props.population > 5 && props.population < 9 ? {fill: "#8590A6"} : props.population > 8 ? {fill: "#5C5D73"} : null
    console.log(props.population)
    return (
        <g>
            <path 
                className={`cls-1 county ${county} ${state}`} 
                style={colorCounty}
                d={d} 
                transform={transform} 
            /> 
            <title>{county}, {state}</title> 
        </g>
    )
}

export default County