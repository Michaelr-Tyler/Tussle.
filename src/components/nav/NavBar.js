import React, {useContext, useState, useEffect} from "react"
import { Link } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as MdIcons from "react-icons/md"
import { IconContext } from "react-icons";
import "./NavBar.css"
import { UsersContext } from "../users/UsersProvider"
import { accoutTypeChecker } from "../acounts/AccountTypeChecker"

export const Navbar = () => {
    const {currentUser, getCurrentUser} = useContext(UsersContext)
    const [sidebar, setSideBar] = useState(false)
    
    const showSidebar = () => setSideBar(!sidebar)
    
    useEffect(() => {
        getCurrentUser()
        
        },[])

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
                    <Link className="navbar__link" to={`${accoutTypeChecker(currentUser)}`}>
                        <AiIcons.AiOutlineHome />
                        <span>Home</span>
                        </Link>
                </li>  
                <li className="nav-text">
                    <Link className="navbar__link" to={`/messages`}>
                        <AiIcons.AiOutlineMessage />
                        <span>Messages</span>
                        </Link>
                </li>
                <li className="nav-text">
                    <Link className="navbar__link" to={`${accoutTypeChecker(currentUser)}/events`}>
                        <MdIcons.MdEventAvailable />
                    <span>My Events</span>
                    </Link>
                </li>
                <li className="nav-text">
                    <Link className="navbar__link" to={`${accoutTypeChecker(currentUser)}/bids`}>
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