import React from "react";
import data from "./Json.json";
import "./PeriodicTable.css";

const colorMap = {
    "noble gas": "#FFBC42",
    "alkaline earth metal": "#EC674E",
    "diatomic nonmetal": "#D81159",
    "alkali metal": "#8F2D56",
    "transition metal": "#58586B",
    "post-transition metal": "#218380",
    lanthanide: "#4AABAF",
    metalloid: "#73D2DE",
    actinide: "#b27371",
    undefined: "#CCCCCC"
};

const PeriodicTable = () => {
    return (
        <>
            <div className='periodic-table-container'>
                <h1 className='table-title'>Periodic Table of Elements</h1>
                <div className="periodic-table ">
                    {data.elements.map((element) => (
                        <div
                            className="element"
                            key={element.name}
                            style={{
                                gridRow: element.ypos,
                                gridColumn: element.xpos,
                                backgroundColor: colorMap[element.category],
                                borderColor: 'white'
                            }}
                        >
                            <strong>{element.symbol}</strong>
                            <small className="number">{element.number}</small>
                            <small className="name">{element.name}</small>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
};

export default PeriodicTable;