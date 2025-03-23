import { useState } from "react";
import {APP_LOGO} from "../utils/constants"
export default function Header() {

    const [loggin, setLoggin] = useState('Log In');
    function logginStatus (){
        if(loggin === "Log In"){
            setLoggin("Log Out")
        }else{
            setLoggin("Log In")
        }
    }
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
                    <li><button onClick={()=> logginStatus()}>{loggin}</button></li>
                </ul>
            </div>
        </div>
    );
}