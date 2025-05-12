import { createContext } from "react";

//initalizing context
const UserContext = createContext({
    loggedInUser: "Default User"
})

export default UserContext;