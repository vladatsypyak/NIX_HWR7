import {ADD_PARTICIPANT, SAVE_RESULT} from "./actions";

const initialState = {
    participants:[{name: "", id: 1}, {name: "", id: 2}],
    results: [],
}

function addParticipant(state, id, name){

    if(state.participants.filter((el)=> el.id === id).length === 0){
        return [...state.participants, {name: '', id: id} ]
    }
    return state.participants.map((el)=>{
            if(el.id === id){
                return {
                    id: id,
                    name: name
                }

            }
            return el
    })
}
function fastestParticipant(state = initialState, action) {
    switch (action.type) {
        case SAVE_RESULT:
            return Object.assign({}, state, {
               results: [...state.results,{
                   result:action.result,
                   name: state.participants.filter((el,i)=> {
                       return i === state.results.length
                   })[0].name
               }]
            });
        case ADD_PARTICIPANT:
            return Object.assign({}, state, {
                participants: addParticipant(state, action.id, action.name)
            });
        default:
            return state
    }

}

export default fastestParticipant