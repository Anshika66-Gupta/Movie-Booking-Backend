import React from 'react'
import { useDispatch } from 'react-redux';
import { sendUserAuthRequest } from '../../api-helpers/api-helpers';
import { userActions } from '../../Store';
import AuthForm from '../Auth/AuthForm'

const Auth = () => {
    const dispatch = useDispatch();
    const onResReceived = (data) => {
        console.log(data);
        dispatch(userActions.login());
        localStorage.setItem("userId", data.id);
    }
        const getData = (data) => {
            console.log(data);
            sendUserAuthRequest(data.inputs, data.signup).then(onResReceived)
                //.then((res) => console.log(res))
                //.then(() => dispatch(userActions.login()))
                .catch((err) => console.log(err));
            
            
        }
    return (
    <div>
            <AuthForm onSubmit={getData} isAdmin={false} />
    </div>
    )
};
export default Auth