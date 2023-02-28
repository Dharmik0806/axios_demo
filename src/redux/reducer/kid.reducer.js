import * as ActionType from '../ActionType'

const initialState = {
    kid: [],
    isLoding: false,
    arrore: null
}

export const kidReducer = (state = initialState, action) => {
    console.log(action.payload, state);
    switch (action.type) {
        case ActionType.GET_KID_DATA:
            return {
                ...state,
                kid: action.payload
            }

        case ActionType.POST_KID_DATA:
            return {
                ...state,
                kid: state.kid.concat(action.payload)
            }

        case ActionType.PUT_KID_DATA:

            let data = state.kid.map((d) => {
                if (d.id === action.payload.id) {
                    return action.payload
                } else {
                    return d
                }
            })
            // console.log(data);
            return {
                ...state,
                kid: data
            }

            case ActionType.DELETE_KID_DATA :

           let finData = state.kid.filter((r) => r.id !== action.payload)
                return{
                    ...state,
                    kid : finData
                }
        default:
            return state
    }


}