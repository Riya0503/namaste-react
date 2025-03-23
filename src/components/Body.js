import RestaturantCard from './RestaurantCard';
import { useEffect, useState } from "react"
import Shimmer from './Shimmer';

const Body = () => {
    // local state variable - super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9880043&lng=77.6893675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        //updating state of listOfRestaurant
        let restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurantList);
        setFilteredRestaurant(restaurantList);
    }

    function filterRestaurant() {
        const filterRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchQuery.toLowerCase()));
        if(filterRestaurant.length !== 0)
            setFilteredRestaurant(filterRestaurant);
    }


    // Conditional Rendering
    return listOfRestaurant.length === 0 ?( 
        <Shimmer/>
    ) : (
        <div className='bodyCont'>
            <div className='filters'>
                <div className='searchCont'>
                    <form>
                        <input className="searchBar" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                        <input className="searchBarBtn" type="button" value="Search" onClick={() => filterRestaurant()}/>
                    </form>
                </div>
                <div className='filterCont'>
                    <button className='filterBtn' onClick={() => {
                        //using state
                        let filteredList = listOfRestaurant.filter(item => item.info.avgRating > 4);
                        setListOfRestaurant(filteredList)
                    }}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className='resCardParentCont'>
                {   
                    filteredRestaurant.map(item => (
                        <RestaturantCard dataSet={item} key={item.info.id}/>
                    ))
                }
            </div>

        </div>
    )
}


export default Body;