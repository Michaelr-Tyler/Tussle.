import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { accoutTypeChecker } from "../acounts/AccountTypeChecker";

import "./Login.css"


export const Login = props => {
    const email = useRef()
    const password = useRef()
    const existDialog = useRef()
    const passwordDialog = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                console.log("exists", exists)
                if (exists && exists.password === password.current.value) {
                    sessionStorage.setItem("tussle_user", exists.id)
                    props.history.push(`${accoutTypeChecker(exists)}` || {})
                } else if (exists && exists.password !== password.current.value) {
                    passwordDialog.current.showModal()
                } else if (!exists) {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Password does not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>
            <section className="form">
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="form--title">Tussle.</h1>
                    <h2 className="form--text">Please sign in</h2>
                    <fieldset className="login">
                        <label htmlFor="inputEmail"> Email Address </label>
                        <input ref={email} type="email"
                            id="email"
                            autoComplete="none"
                            className="form-control"
                            placeholder="E-mail"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="login">
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            autoComplete="none"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset className="signIn--register">
                        <button type="submit">
                            Sign in
                        </button>
                        <section className="link--register">
                            <Link to="/register">Sign up here</Link>
                        </section>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}

