import axios from "axios"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/todo`

export const getOne = async (tno) => {
    const res = await axios.get(`${prefix}/${tno}`)

    return res.data
}

export const getList = async (pageParam) => {
    const {page, size} = pageParam

    const res = await axios.get(`${prefix}/list`, {params:{page, size}})

    return res.data
}

export const postAdd = async (todoObj) => {
    //JSON.stringify(obj) => JSON문자열
    //axios쓰면 그럴 필요 없음 그냥 전달
    const res = await axios.post(`${prefix}/`, todoObj)

    return res.data
}