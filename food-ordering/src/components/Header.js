import { useState, useContext } from "react";
import {APP_LOGO} from "../utils/constants"
import {Link} from 'react-router'
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export default function Header() {
    const [loggin, setLoggin] = useState('Log In');
    function logginStatus (){
        setLoggin( loggin === "Log In" ? "Log Out" : "Log In");
    }

    const contextData = useContext(UserContext);
    // console.log(contextData)

    const onlineStatus = useOnlineStatus();

    //subscring to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)
    return (
        <div className=" absolute top-0 flex w-[100%] bg-white z-10 justify-between shadow-md sm:shadow-lg lg:shadow-xl">
            <div>
                <Link to={"/"}><img className="w-32 " src={APP_LOGO} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex [&>*]:pr-6">
                    <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/cart">Cart ({cartItems.length} items)</Link></li>

                    <li><Link to="/contact-us">Contact Us</Link></li>
                    {/* <li><Link to="/Grocery">Grocery</Link></li> */}

                    <li><button onClick={()=> logginStatus()}>{loggin}</button></li>

                    <li><Link>{contextData.loggedInUser}</Link></li>
                </ul>
            </div>
        </div>
    );
}