import React, { useRef, useContext, useEffect } from "react"
import "./Login.css"
import { AccountTypeContext } from "../AccountTypeProvider"
import { TechnicalTypeContext } from "../TechnicalTypeProvider"

export const Register = (props) => {
const {accountTypes, getAccountTypes} = useContext(AccountTypeContext)
const {technicalTypes, getTechnicalTypes} = useContext(TechnicalTypeContext)

    const Name = useRef()
    const phoneNumber = useRef()
    const following = useRef()
    const accountType = useRef()
    const technicalType = useRef()
    const email = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()

    useEffect(() => {
        getAccountTypes()
        getTechnicalTypes()
    }, [])

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => !!user.length)
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            existingUserCheck()
                .then(() => {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            name: Name.current.value,
                            phoneNumber: phoneNumber.current.value,
                            following: following.current.value,
                            technicalId: parseInt(technicalType.current.value),
                            accountTypeId: parseInt(accountType.current.value)
                        })
                    })
                        .then(_ => _.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("tussle_user", createdUser.id)
                                props.history.push("/")
                            }
                        })
                        
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Tussle</h1>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input ref={Name} type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Phone Number </label>
                    <input ref={phoneNumber} type="text"
                        name="phoneNumber"
                        className="form-control"
                        placeholder="Number"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Online Presence </label>
                    <input ref={following} type="text"
                        name="following"
                        className="form-control"
                        placeholder="Number"
                        required />
                </fieldset>
                <fieldset>
                <div className="form-control">
                    <label htmlFor="accountType">Account Type </label>
                    <select defaultValue="" name="accountType" ref={accountType} id="accountType" className="form-control" >
                        <option value="0">Select an account type</option>
                        {accountTypes.map(a => (
                            <option key={a.id} value={a.id}>
                                {a.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-control">
                    <label htmlFor="technicalType">Technical </label>
                    <select defaultValue="" name="technicalType" ref={technicalType} id="technicalType" className="form-control" >
                        <option value="0">Select a technical</option>
                        {technicalTypes.map(t => (
                            <option key={t.id} value={t.id}>
                                {t.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}