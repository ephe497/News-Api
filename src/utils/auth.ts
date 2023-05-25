
import { API } from '@/agent'
import { data } from 'autoprefixer'
import Cookies from 'js-cookie'

const tokenKey = "_token"
const sessionKey = "_session"



export const setToken = (token: string) => {
    const encodedToken = Buffer.from(JSON.stringify(token)).toString("base64")
    return Cookies.set(tokenKey, encodedToken, { expires: 10 })
}

export const getToken = () => {
    let token = Cookies.get(tokenKey)
    if (token) {
        token = Buffer.from(token, "base64").toString()
        token = JSON.parse(token)
    }
    return token
}


export const saveUserSession = (data: any) => {
    Cookies.set(sessionKey, Buffer.from(JSON.stringify(data)).toString("base64"), { expires: 10 })
}


export const getUserSession = async () => {
    let user;
    const token = getToken()
    if (!token) return null
    let currentSession = Cookies.get(sessionKey)
    if (currentSession) {
        currentSession = atob(currentSession)
        return JSON.parse(currentSession);
    }
    else {
        try {
            const { data: { data } } = await API.get("user", "/me", {})
            saveUserSession(data)

            return data

        } catch (error) {
            return null
        }

    }


}