import React from "react"

const StateBorders = props => {
    const { d, transform } = props.borderData
    return (
        <g>
            <path className="cls-2" style={{stroke: "black", strokeWidth: "1pt"}}d={d} transform={transform} />
            <title>State Borders</title>
        </g>
    )
}

export default StateBorders