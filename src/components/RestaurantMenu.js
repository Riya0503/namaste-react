import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {RESTRO_IMG, RESTRO_IMG_SMALL} from "../utils/constants"
import { useParams } from "react-router";
import Accordian from './Accordian';
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    
    let [showIndex, setShowIndex] = useState(0);

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    
    

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
                                setShowIndex={() => setShowIndex(index)}
                                
                            >
                                {cardItem?.map((item, index) => {
                                    const itemInfo = item?.card?.info;
                                    // console.log(itemInfo)
                                    return (
                                        <li className="flex justify-between m-4 border-b-1 border-gray-200 p-4" key={itemInfo?.id}>
                                            <div className="mr-4">
                                                <div className="text-[16px]">{itemInfo?.name}</div>
                                                <div className="font-bold text-[14px]">Rs {(itemInfo?.price || itemInfo?.defaultPrice )/100}</div>
                                                {itemInfo.ratings.aggregatedRating.rating && <div className="text-sm">{'⭐  ' + itemInfo.ratings.aggregatedRating.rating}</div>}
                                                <div className="text-[10px] text-gray-500">{itemInfo.description}</div>
                                            </div>
                                            <div className="h-[150px] w-[150px] overflow-hidden relative">
                                                <AddItemButton/>
                                                <img className="h-full w-full rounded-lg" src={`${RESTRO_IMG_SMALL}${itemInfo?.imageId}`}/>
                                            </div>
                                        </li>
                                    )})
                                }
                            </Accordian>
                        )})}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;

const AddItemButton = () => {
    
    let [itemQty, setItemQty] = useState(0);

    const incrementItemQty = () => {
        itemQty = itemQty+ 1;
        setItemQty(itemQty)
    }

    const decrementItemQty = () => {
        itemQty = itemQty-1;
        setItemQty(itemQty)
    }
    return (
        <div className="absolute flex bottom-0 shadow-lg px-4 py-2 bg-white text-green-800 rounded-lg text-sm" >
            {itemQty !== 0 && <button className="ml-2"  onClick={() => decrementItemQty()}> -</button>}
            <div className="px-2">{itemQty !== 0 &&  itemQty}</div>
            <button className="mr-2" onClick={() => incrementItemQty()}>{itemQty === 0 ? "ADD +" : '+ '}</button>
        </div>
        
    )
}