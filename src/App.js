import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock";
import Participants from "./components/Participants";
import {useState} from "react";
import {store} from "./redux/store";
import Result from "./components/Result";

function App() {
    const [showParticipants, setShowParticipants] = useState(true)
    const [showClock, setShowClock] = useState(false)
    const [showResult, setShowResult] = useState(false)
    const [results, setResults] = useState(store.getState().results)


    function onStartClick() {
        setShowParticipants(false)
        setShowClock(true)
    }
    function onStopClick() {
        setShowClock(false)
        setShowResult(true)



    }

    return (
        <div className="App">
            {showParticipants ? <Participants onStartClick={onStartClick}/> : null}
            {showClock ? <Clock onStopClick={onStopClick}/> : null}
            {showResult ? <Result/> : null}

        </div>
    );
}

export default App;
