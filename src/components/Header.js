import {APP_LOGO} from "../utils/constants"
export default function Header() {
    return (
        <div className="header">
            <div className="logoCont">
                <img src={APP_LOGO} />
            </div>
            <div className='navItems'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Cart</a></li>
                </ul>
            </div>
        </div>
    );
}