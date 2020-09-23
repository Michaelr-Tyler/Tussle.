import React, {useState} from "react"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import { IconContext } from "react-icons";

import "./NavBar.css"

export const Navbar = (props) => {
    const [sidebar, setSideBar] = useState(false)

    const showSidebar = () => setSideBar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color: '#BFB1B0'}}>
        <div className="navbar">
            <Link to="#" className='menu-bars'>
                <FaIcons.FaBars  onClick={showSidebar}/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                <li className="nav-text">
                    <Link className="navbar__link" to="/">
                        <AiIcons.AiOutlineHome />
                        <span>Home</span>
                        </Link>
                </li>  
                <li className="nav-text">
                    <Link className="navbar__link" to="/messages">
                        <AiIcons.AiOutlineMessage />
                        <span>Messages</span>
                        </Link>
                </li>
                <li className="nav-text">
                    <Link className="navbar__link" to="/events">
                        <MdIcons.MdEventAvailable />
                    <span>My Events</span>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link className="navbar__link" to="/bids">
                        <MdIcons.MdLocalOffer />
                    <span>Bids</span>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link className="navbar__link" to="/logout">
                        <AiIcons.AiOutlineLogout />
                    <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}