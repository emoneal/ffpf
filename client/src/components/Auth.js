import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from "../context/UserProvider.js"


const initInputs = { username: "", password: "" }

export default function Auth() {
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const { signup, login, errMsg, resetAuthErr } = useContext(UserContext)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
        console.log(e)

    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
        console.log(e)
    }

    return (
        <div className="auth-container">
            { !toggle ? 
                <>
                    <h1>Login</h1>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="Login"
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Not a member? Signup here!</p>
                </>
                :
                <>
                    <h1>Signup</h1>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="Signup"
                    />
                    <p onClick={() => setToggle(prev => !prev)}>Already a member? Sign up here!</p>
                </>
            }       
        </div>
    )

}