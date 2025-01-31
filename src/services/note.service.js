import axios from "axios"

const BASE_URL = "http://127.0.0.1:5000/"

export const getNotes = async() => {
    try {
        const response = await axios.get(`${BASE_URL}notes`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postNotes = async(data) => {
    try {
        const response = await axios.post(`${BASE_URL}notes`, data)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getNote = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}notes/${id}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}notes/${id}`)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const updateNote = async (id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}notes/${id}`, data)
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
