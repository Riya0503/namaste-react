import {Component} from 'react';
import User from './User';
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class AboutUs extends Component{
    //constructor is called FIRST
    constructor(props){
        super(props);
        // console.log("Parent contructor")
    }

    //componentDidMount is called after Rendering is complete 
    componentDidMount(){
        // console.log("Parent componentDidMount")

    }

    componentDidUpdate(){
        // console.log("Parent componentDidUpdate")
    }

    componentWillUnmount(){
        // console.log("Parent componentWillMount")
    }

    //render is called SECOND
    render(){
        // console.log("Parent render")
        return (
            <>
                <div>About Us</div>
                <div>Hello this is about us</div>
                <div>
                    <UserContext.Consumer>
                        {(data) => console.log(data)}
                    </UserContext.Consumer>
                </div>
                <h2>Functional Component</h2>
                <User name={"Riya Chauhan (function)"} location={"Bengaluru"} contact={"@riyachauhan517"}/>
                <h2>Class Component</h2>
                <UserClass  name={"Riya Chauhan (class)"} location={"Bengaluru"} contact={"@riyachauhan517"}/>
                <UserClass  name={"Prakhar (class)"} location={"US"} contact={"@prakhar96"}/>
            </>
        )
    }
}

//functional Component
// const AboutUs = () => {
//         return (
//             <>
//                 <div>About Us</div>
//                 <div>Hello this is about us</div>

//                 <h2>Functional Component</h2>
//                 <User name={"Riya Chauhan (function)"} location={"Bengaluru"} contact={"@riyachauhan517"}/>
//                 <h2>Class Component</h2>
//                 <UserClass  name={"Riya Chauhan (class)"} location={"Bengaluru"} contact={"@riyachauhan517"}/>
//             </>
//         )
// }

export default AboutUs;