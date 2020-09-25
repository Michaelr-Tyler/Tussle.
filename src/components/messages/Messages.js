import React from "react"
import { Link } from "react-router-dom"
import "./Messages.css"

export default ({ user }) => (
    <section className="messenger">
        <h3 className="user__name">
            <Link to={`/messages/${user.id}`}>
                { user.name }
            </Link>
        </h3>
    </section>
)