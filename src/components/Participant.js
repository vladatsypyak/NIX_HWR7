import {useState} from "react";

export default function Participant(props){
    function saveName (e){
        props.saveName(e.target.value, props.id)
    }
    return (
        <div className={"participant"}>

            <input onChange={saveName} type="text" placeholder={"name"}/>
        </div>
    )
}