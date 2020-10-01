import Axios from 'axios' 
import { baseUrl, Timeout } from './AppSettings'

const aObj = Axios.create({
    baseURL: baseUrl,
    timeout: Timeout,
    headers: null
})

export const userLogin = async (params) => {
    return await aObj.get("userLogin.php", {params:params} )
}

export const product = async (params) => {
    return await aObj.get("product.php",{params:params})
}