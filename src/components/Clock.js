import ReactDOM from "react-dom/client";
import React, {useState, useEffect} from 'react';
import Time from "./Time";
import {store} from "../redux/store";
import {saveTime} from "../redux/actions";


function Clock(props) {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(true);
    const clickHandler = () => {
        if (timerOn) {
            store.dispatch(saveTime(time))
            setTimerOn(false)
            if(store.getState().results.length === store.getState().participants.length){
                props.onStopClick()
            }
        } else {
            setTime(0)
            setTimerOn(true)
        }
    }
    useEffect(() => {
        let timer = null;
        if (timerOn) {
            timer = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else if (!timerOn) {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [timerOn]);

    return (
        <div className="clock ">
            <Time time={time}/>
            <button className={"button"} onClick={clickHandler}>{timerOn ? "stop" : "start"}</button>
            <p className={"name"}>{store.getState().participants.filter((el,i)=> {
                return i === store.getState().results.length
            })[0].name} is running</p>
        </div>
    );
}


export default Clock