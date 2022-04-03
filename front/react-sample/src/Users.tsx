import React, { useState } from 'react';
import { AxiosError, AxiosResponse } from 'axios';

type UserInfo = {
  id: number,
  name: String
}


const Users = () => {

  const [ users, setUsers ] = useState<UserInfo[]>()

  const axiosBase = require('axios')
  const axios = axiosBase.create({
    baseURL: process.env.REACT_APP_DEV_API_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-with': 'XMLHttpRequest'
    },
    ResponseType: 'json'
  })

  const getUsers = () => {
    axios.get('/')
    .then((resp: AxiosResponse) => {
      console.log(resp)
      setUsers(resp.data)
    })
    .catch((e: AxiosError) => {
      console.log(e)
    })
  }

  return (
    <>
      <button onClick={getUsers}>ユーザー取得</button>
      <div>Users</div>
      <p>{users}</p>
    
    
    </>
  )
}

export default Users