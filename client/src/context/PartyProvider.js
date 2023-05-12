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
  
    const { user, userState, setUserState, errMsg } = useContext(UserContext)
    const parties = []

    
    function getUserParties(){
        partyAxios.get("/api/parties/find/user")
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              parties: res.data
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

    function getAllParties() {
        partyAxios.get("/api/parties")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    parties: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addParty(newParty) {
        partyAxios.post("/api/parties", newParty)
        .then(res => {
            console.log(res.data)
            setUserState(prevState => ({
                ...prevState,
                parties: [...prevState.parties, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function editParty(updates, partyId) {
        partyAxios.put(`/api/parties/${partyId}`, updates)
            .then(res => {
                let editedParties = parties.map(party => party._id !== partyId ? party : res.data)
                setUserState(prevState => ({
                    ...prevState,
                    parties: [editedParties]
                }))
            })
    }

    function deleteParty(partyId) {
        partyAxios.delete(`/api/parties/${partyId}`, partyId)
            .then(res => {
                let filteredParties = parties.filter(party => party._id !== partyId)
                console.log(filteredParties)
                setUserState(prevState => ({
                    ...prevState,
                    parties: filteredParties
                }))
            })
    }

    return (
        <PartyContext.Provider
            value={{
                ...userState,
                addParty,
                getUserParties,
                getAllParties,
                editParty,
                deleteParty
            }}>
            
            { props.children }

            </PartyContext.Provider>
    )
}