import {store} from "../redux/store";


export default function Result(props) {
    function sortResult() {
        return store.getState().results.sort((a, b) => {
            return a.result - b.result
        })


    }

    function getTime(ms) {
        return <span><span>{(ms - (ms % 1000)) / 1000} :</span> <span>{(ms % 1000)}</span></span>
    }

    return (
        <div className={"result_wrap"}>
            <p className={"title"}> Final result</p>
            <ol>
                {
                    sortResult().map((el, i) => {
                        if (!i) {
                            return <li className={"winner"}>
                                <p>{el.name}: <span>{getTime(el.result)}</span></p>
                            </li>
                        }
                        return <li>
                            <p>{el.name}: <span>{getTime(el.result)}</span></p>
                        </li>
                    })
                }
            </ol>
        </div>
    )
}