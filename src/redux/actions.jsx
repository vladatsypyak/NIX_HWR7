export const SAVE_RESULT = "SAVE_RESULT"
export const ADD_PARTICIPANT = "ADD_PARTICIPANT"

export function saveTime (result) {
    return {type: SAVE_RESULT, result}

}
export function addParticipant (id, name) {
    return {type: ADD_PARTICIPANT, id, name}
}



