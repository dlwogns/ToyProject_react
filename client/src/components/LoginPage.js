import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../_action/user_action';
import { withRouter } from 'react-router-dom';
function LoginPage(props){

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            // .then(response => {
            //     if (response.payload.loginSuccess) {
            //         props.history.push('/');
            //     } else {
            //         alert('Error˝');
            //     }
            // }).catch(err=>{
            //     alert(err);
            // })

    }


    return(
        <form onSubmit={onSubmitHandler}>
            {/* 로그인 폼 */}
            <label>Email</label>
            <input type="email" value={Email} onChange={onEmailHandler} />
            <label>Password</label>
            <input type="password" value={Password} onChange={onPasswordHandler} />
            <button type="submit"> Login </button>
        </form>
    )
}

export default LoginPage