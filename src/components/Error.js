import Header from "./Header";
import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <>
            <Header/>
            <div>OOps Something went wrong!!!!</div>
            <div>{err.status} : {err.data}</div>
        </>
    )
}

export default Error;