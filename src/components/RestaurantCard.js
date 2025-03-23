import {RESTRO_IMG} from "../utils/constants"
export default function RestaurantCard(props) {

    const {dataSet} = props;
    const {
        name, 
        avgRating, 
        cloudinaryImageId, 
        cuisines, 
        areaName, 
        costForTwo} = dataSet?.info;
    return (
        <div className='resCardCont'>
            <div className='resCard'>
                <img src={`${RESTRO_IMG}${cloudinaryImageId}`}/>
                <div className='resCardContentCont'>
                    <h3>{name}</h3>
                    <div>{avgRating}</div>
                    <div>{cuisines.join(", ")}</div>
                    <div>{areaName}</div>
                    <div>{costForTwo}</div>
                    <button>BUY NOW</button>
                </div>
            </div>
        </div>
    );
}