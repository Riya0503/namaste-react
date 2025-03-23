import RestaturantCard from './RestaurantCard';
import {DataSet} from "../utils/constants"
import { useState } from "react"

const Body = () => {
    // local state variable - super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState(DataSet);
    //normal variable
    // const listOfRestaurant;

    return (
        <div className='bodyCont'>
            <div className='searchCont'>
                <form>
                    <input className="searchBar" type="search"/>
                    <input className="searchBarBtn" type="button" value="Search"/>
                </form>
            </div>
            <div className='filterCont'>
                <button className='filterBtn' onClick={() => {
                    //using state
                    let filteredList = listOfRestaurant.filter(item => item.info.avgRating > 4);
                    setListOfRestaurant(filteredList)
                    console.log(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className='resCardParentCont'>
                {   
                    listOfRestaurant.map(item => (
                        <RestaturantCard dataSet={item} key={item.info.id}/>
                    ))
                }
            </div>

        </div>
    )
}


export default Body;