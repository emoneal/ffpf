import React, { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from './UserProvider.js'


export const PartyContext = React.createContext()

const partyAxios = axios.create()

partyAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function PartyProvider(props) {
  
    const { user, userState, setUserState } = useContext(UserContext)

    
    function getUserParties(){
        partyAxios.get("/api/todo/user")
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              parties: res.data
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }


    function addParty(newParty) {
        partyAxios.post("/", newParty)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                
                parties: [...prevState.parties, user, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <PartyContext.Provider
            value={{
                ...userState,
                addParty,
                getUserParties
            }}>
            
            { props.children }

            </PartyContext.Provider>
    )
}