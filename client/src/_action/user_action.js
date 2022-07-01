import axios from 'axios';

export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit,{withCredentials: true })
        .then(response => response.data)
        .catch(err => {
            alert(err.response.data)
        })

    return {
        type: "LOGIN_USER",
        payload: request
    }
}
