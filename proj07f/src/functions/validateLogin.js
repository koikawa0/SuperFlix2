import axios from "axios"

export default function ValidateLogin(email, password){
    return axios({
        method: "POST",
        url: "http://localhost:4000/api/enter",
        data: {
            email: email,
            password: password            
        }
    })
}