import { deleteRequest, getRequest, postRequest, putRequest } from "../request"


export const fetchAllKidData = () => {
    return getRequest("KidEra")
}

export const addKid = (data) => {
    return postRequest("KidEra" , data)
}

export const updateKid = (data) => {
return putRequest("KidEra/" , data)
}

export const deleteKid = (id) => {
    return deleteRequest("KidEra/" , id)
}