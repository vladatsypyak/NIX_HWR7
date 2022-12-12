import {useState} from "react";
import Participant from "./Participant";
import {store} from "../redux/store";
import {addParticipant} from "../redux/actions";

export default function Participants(props) {
    const [participants, setParticipants] = useState(store.getState().participants)

    function saveName(name, id) {
        store.dispatch(addParticipant(id, name))
        console.log(store.getState())
    }
    function onAddClick(){
        store.dispatch(addParticipant(Math.random(), ""))
        setParticipants(store.getState().participants)

    }
    return (
        <div className={"participants"}>
            {participants.map((el) => {
                return <Participant saveName={saveName} id={el.id} name={el.name}/>
            })}
            <div className="buttons_wrap">
                <button className={"button add"} onClick={onAddClick}>add participant</button>
                <button className={"button"} onClick={()=>props.onStartClick()}>start</button>

            </div>
        </div>
    )
}