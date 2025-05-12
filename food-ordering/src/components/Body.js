import RestaturantCard, { withPromotedLabel } from './RestaurantCard';
import { useEffect, useState, useContext } from "react"
import Shimmer from './Shimmer';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext';

const Body = () => {
    // local state variable - super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [])

    const { loggedInUser, setUserInfo } = useContext(UserContext);

    const PromotedRestaurantCard = withPromotedLabel(RestaturantCard)

    const fetchData = async() => {
        //https://proxy.corsfix.com/? this is cors proxy fix 
        const data = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9880043&lng=77.6893675&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
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

    function filterTopRated(){
        //using state
        let filteredList = listOfRestaurant.filter(item => item.info.avgRating > 4.3);
        setFilteredRestaurant(filteredList)
        // console.log(filteredList)
    }

    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return <h1>Looks like you're offline, Please check your internet connection!!!!</h1>
    }

    // Conditional Rendering
    return listOfRestaurant.length === 0 ?( 
        <Shimmer/>
    ) : (
        <div className='mt-28'>
            <div className="flex justify-around p-6 shadow-md">
                <div>
                    <form>
                        <input className="border p-2 rounded-md" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} data-testid="searchInput"/>
                        <input className="bg-gray-200 py-2 px-6 ml-1 border rounded-md" type="button" value="Search" onClick={() => filterRestaurant()}/>
                    </form>
                </div>
                <div >
                    <button className="bg-gray-200 p-2 ml-1 border rounded-md"  onClick={() => {filterTopRated()}}>Top Rated Restaurant</button>
                </div>
                <div>
                    <label>User Name: </label>
                    <input className='border' type='text' value={loggedInUser} onChange={(e) => setUserInfo(e.target.value)}/>
                </div>
            </div>
            <div className='flex flex-wrap'>
                {   
                    filteredRestaurant.map(item => {
                        // console.log(item)
                        return (
                        <Link to={"/restaurants/" + item.info.id} key={item.info.id}>
                            {
                                item.info.promoted ? <PromotedRestaurantCard dataSet={item}/> : <RestaturantCard dataSet={item}/>
                            }
                        </Link>
                    )})
                }
            </div>

        </div>
    )
}


export default Body;