import React from "react";
import styleNewYear from "./happyNewYear.module.scss"


export default function HappyNewYear (props) {
    return (
        <div className={styleNewYear.container}>
            <div className={styleNewYear.title}>2022</div>
            <div className={styleNewYear.deco}>HAPPY NEW YEAR</div>
        </div>
    )
}