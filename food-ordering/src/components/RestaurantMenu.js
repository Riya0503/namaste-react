import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {RESTRO_IMG, RESTRO_IMG_SMALL, RES_MENU_API} from "../utils/constants"
import { useParams } from "react-router";
import Accordian from './Accordian';
import useRestaurantMenu from "../utils/useRestaurantMenu";

import ItemList from "./ItemList";
const RestaurantMenu = () => {
    
    let [showIndex, setShowIndex] = useState();
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData()
    }, []);

    const {resId} = useParams();
    // const resInfo = useRestaurantMenu(resId);
    
    const fetchData = async () => {
        const data = await fetch(RES_MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        setResInfo(json.data)
    }

    if(resInfo === null ) {
        return <Shimmer/>
    } 
    const {name, cuisines, costForTwoMessage, cloudinaryImageId, avgRating, totalRatingsString,areaName, aggregatedDiscountInfo } = resInfo?.cards[2]?.card?.card?.info;
    const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(i => i?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
    

    // console.log(cards)
    return (
        <div className="flex items-center flex-col ">
            <div className="w-full h-[150px] overflow-hidden">
                <img  className="w-full" src={`${RESTRO_IMG}${cloudinaryImageId}`}/>
            </div>
            <div className="w-[60%] pt-16">
                <h1 className="font-bold text-2xl py-6">{name}</h1>
                <div className="border-1 border-gray-200 shadow-lg rounded-lg pt-6 pb-4 px-4 mb-8 [&>*]:pb-2">
                    <div>{"⭐ " +avgRating + " (" + totalRatingsString+    ") • " + costForTwoMessage } </div>
                    <p className="text-orange-500 text-[14px]">{cuisines.join(", ")} </p>
                    <p className="text-[14px]">{'Outlet ' + areaName}</p>
                </div>
                <div className="flex overflow-scroll">
                    {
                        aggregatedDiscountInfo.descriptionList.map((item) => {
                            return (
                                <div key={item.meta } className="shadow p-4 m-2 border-gray-200 rounded-lg min-w-[200px]">{item.meta || "use discount code: "  +item.discountType}</div>
                            )
                        })
                    }
                </div>
                <h3 className="text-center text-2xl pt-16">- MENU -</h3>
                <ul className="py-16">
                    {cards?.slice(1).map((item, index) => {
                        const cardItem = item?.card?.card?.categories ? item?.card?.card?.categories[0].itemCards : item.card.card.itemCards
                        return (
                            item.card.card.title && <Accordian
                                key={item.card.card.categoryId}
                                title={item.card.card.title}
                                isOpen={index === showIndex}
                                childLen  ={cardItem.length}
                                setShowIndex={() => setShowIndex(index)}
                                
                            >
                                <ItemList cardItem={cardItem} />
                            </Accordian>
                        )})}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;

