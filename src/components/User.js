import {useEffect, useState} from 'react';
// const User = (props) => 
// {
//     return (
//         <div className="user-card">
//             <div>Name: {props.name}</div>
//             <div>Location: {props.location}</div>
//             <div>Contact: {props.contact}</div>
//         </div>
//     )
// }

const User = ({name, location, contact}) => {
    // useEffect(() => {
        // console.log("useEffect")
        // const timer = setInterval(()=> {
        //     console.log("Child Interval functional")
        // }, 1000);
        

        // this is called when you're unmounting component
        // return () => {
        //     clearInterval(timer);
        //     // console.log("useEffect Return")
        // }
    // }, [])

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    // console.log("Child 2 render")
    return ( 
        <div>
            <div>Name: {name}</div>
            <div>Location: {location}</div>
            <div>Contact: {contact}</div>
            <h3>count: {count}</h3>
            <h3>count2: {count2}</h3>
        </div>
    )
}

export default User;