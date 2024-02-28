import { LOGO } from "./constants"

export const Header = () => {
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
            </ul>
            </div>
        </div>
    )
}
