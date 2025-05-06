import { useContext } from "react";
import {RESTRO_IMG} from "../utils/constants"
import UserContext from "../utils/UserContext";
export default function RestaurantCard(props) {

    const {dataSet} = props;
    const {
        name, 
        avgRating, 
        cloudinaryImageId, 
        cuisines, 
        areaName, 
        costForTwo} = dataSet?.info;

    const contextData = useContext(UserContext);
    return (
        <div className="m-4 p-4 w-[250px]  bg-gray-100 rounded-lg hover:bg-gray-200">
            <div>
                <img className="rounded-lg mb-2" src={`${RESTRO_IMG}${cloudinaryImageId}`}/>
                <div>
                    <h3 className="font-bold">{name}</h3>
                    <div>{avgRating} stars</div>
                    <div>{cuisines.join(", ")}</div>
                    <div>{areaName}</div>
                    <div>{costForTwo}</div>
                    <button>BUY NOW</button>
                    <div>{contextData.loggedInUser}</div>
                </div>
            </div>
        </div>
    );
}

export const withPromotedLabel = (RestaturantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
                <RestaturantCard {...props}/>
            </div>
        )
    }
}