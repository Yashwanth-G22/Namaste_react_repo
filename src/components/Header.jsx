import { useState } from "react"
import { LOGO } from "./constants"

export const Header = () => {
    const [state, setState] = useState('logout')

    const updateBtn = () => {
        if (state === 'login') setState('logout');
        if (state === 'logout') setState('login');
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button onClick={updateBtn}>{state}</button></li>
                </ul>
            </div>
        </div>
    )
}
