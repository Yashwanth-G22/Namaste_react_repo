import { useState } from "react"
import { LOGO } from "./constants"
import { Link } from 'react-router-dom';
import { useOnlineStatus } from "../utils/useOnlineStatus";

export const Header = () => {
    const [state, setState] = useState('logout')
    const {onlineStatus} = useOnlineStatus();

    const updateBtn = () => {
        if (state === 'login') setState('logout');
        else setState('login');
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? '✅' : '🔴'} </li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/cart'>Cart</Link></li>
                    <li><button onClick={updateBtn}>{state}</button></li>
                </ul>
            </div>
        </div>
    )
}
