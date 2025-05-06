import React, { use } from "react";

class UserClass extends React.Component {
    //best place to creatr state variable and props.
    constructor(props){
        //it is the only place to set up our initial state and bind event handlers before the React component mounts. 
        // By using super(props), we ensure that the constructor props are correctly passed to the parent constructor, 
        // allowing us to access this.
        super(props);
        this.state = {
            count : 0,
            userData: {
                name: 'Dummy',
                location: 'dummy'
            }
        }
        // console.log(this.props.name + "Child constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name + "Child componentDidMount");
        const data = await fetch("https://api.github.com/users/Riya0503");
        const json = await data.json();

        this.setState({
            userData: json
        })

        // this.timer = setInterval(()=> {
        //     console.log("Child Interval")
        // }, 1000);

    }

    componentDidUpdate(){
        // console.log(this.props.name + "Child componentDidUpdate")
    }

    componentWillUnmount(){
        // here we are clearing the timer else the timer will keep on triggering on all pages
        // clearInterval(this.timer); 
    }

    render(){
        const { name, location, contact }  = this.props;
        const {count, userData } = this.state;
        // console.log(userData)
        // console.log(this.props.name + "Child render")
        return(
            <div>
                <div><img src={userData.avatar_url}/></div>
                <div>Name: {userData.name}</div>
                <div>Location: {location}</div>
                <div>Contact: {userData.login}</div>
                <h3>count: {count}</h3>
                <button onClick={() => {
                    //this.state.count = this.state.count+1 -- wrong way -- Never Update State Variable directly
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Count Increase</button>
            </div>
        );
    }
}

export default UserClass;