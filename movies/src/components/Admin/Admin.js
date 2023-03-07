import React from 'react'
import { useDispatch } from 'react-redux';
import { sendAdminAuthRequest } from '../../api-helpers/api-helpers';
import { adminActions } from '../../Store';
import AuthForm from '../Auth/AuthForm';


const Admin = () => {
  const dispatch = useDispatch()
  

  const getData = (data) => {
    console.log("Admin", data);
    sendAdminAuthRequest(data.inputs)
      .then((res) => console.log(res))
      .then(() => dispatch(adminActions.login()))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <AuthForm onSubmit={getData} isAdmin ={true} />
    </div>
  )
}

export default Admin