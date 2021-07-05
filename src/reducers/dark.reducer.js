import { DARK_MODE } from "../actions/dark.action"

const initialState = {}

export default function darkMode(state=initialState, action){
    switch(action.type){
        case DARK_MODE:
            return action.payload
        default:
            return state
    }
}