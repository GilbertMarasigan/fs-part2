import axios from "axios"
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const deleteUrl = baseUrl + `/${id}`
    const request = axios.delete(deleteUrl)
    return request.then(response => response.data)
}

const replaceNumber = (id, newObject) => {
    const request = axios.put(baseUrl + `/${id}`, newObject)

    return request.then(response => response.data)
}

export default {
    getAll, 
    create,
    deletePerson,
    replaceNumber
}