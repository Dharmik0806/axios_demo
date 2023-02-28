import { addKid, deleteKid, fetchAllKidData, updateKid } from '../../common/apis/kid.api'
import * as ActionType from '../ActionType'

export const getKidData = () => (dispatch) => {
    try {
        // fetch('http://localhost:3004/KidEra', {
        //     method : "GET"
        // })

        // .then((response) => response.json())
        // .then((data) => dispatch({type :ActionType.GET_KID_DATA , payload : data }))

        fetchAllKidData()
            .then((response) => dispatch({ type: ActionType.GET_KID_DATA, payload: response.data }))
        // .then((response) => console.log(response.data))
    } catch (errore) {

    }
}


export const addKidData = (value) => (dispatch) => {
    try {
        addKid(value)
            .then((response) => dispatch({ type: ActionType.POST_KID_DATA, payload: response.data }))
    } catch (errore) {

    }
}

export const updateKidData = (value) => (dispatch) => {
    try {
        updateKid(value)
            .then((response) => dispatch({ type: ActionType.PUT_KID_DATA, payload: response.data }))
    } catch (errore) {

    }
}

export const deleteKidData = (id) => (dispatch) => {
    try {
        deleteKid(id)
        .then(() => dispatch({type : ActionType.DELETE_KID_DATA , payload : id}))
    } catch (errore) {

    }
}