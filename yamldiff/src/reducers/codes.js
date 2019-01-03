import {
    CHANGE_ORIGIN,
    CHANGE_NEW,
} from '../actions'

export default function getCodes(state = {}, action) {
    switch (action.type) {
        case CHANGE_ORIGIN:
            return {
                ...state,
                originCode: action.data
            }
        case CHANGE_NEW:
            return {
                ...state,
                newCode: action.data
            }

        default:
            return state
    }
}