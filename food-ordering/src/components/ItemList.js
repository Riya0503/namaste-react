import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import {RESTRO_IMG, RESTRO_IMG_SMALL} from "../utils/constants"

const ItemList = ({cardItem}) => {
    // console.log(cardItem);
    return (
        <div>
            {cardItem?.map((item, index) => {
                const itemInfo = item?.card?.info;
                // console.log(itemInfo)
                return (
                    <li data-testid="resMenuItem" className="flex justify-between m-4 border-b-1 border-gray-200 p-4" key={itemInfo?.id}>
                        <div className="mr-4 w-[80%]">
                            <div className="text-[16px]">{itemInfo?.name}</div>
                            <div className="font-bold text-[14px]">Rs {(itemInfo?.price || itemInfo?.defaultPrice )/100}</div>
                            {itemInfo?.ratings?.aggregatedRating?.rating && <div className="text-sm">{'⭐  ' + itemInfo?.ratings?.aggregatedRating?.rating}</div>}
                            <div className="text-[10px] text-gray-500">{itemInfo?.description}</div>
                        </div>
                        <div className="h-[150px] w-[20%] overflow-hidden relative">
                            <AddItemButton item={item} index={index}/>
                            <img className="h-full w-full rounded-lg" src={`${RESTRO_IMG_SMALL}${itemInfo?.imageId}`}/>
                        </div>
                    </li>
                )})
            }
        </div>
    )
}

export default ItemList;


const AddItemButton = ({item, index}) => {
    
    let [itemQty, setItemQty] = useState(0);
    
    const dispatch = useDispatch();

    const handleAddItem = () => {
        // dispatch an action
        // itemName is converted to payload obj like {type: 'cart/addItem', payload: itemName} and 
        // passed to addItem as second argument i.e action.
        // so we can access the itemName value using action.payload;
        dispatch(addItem(item))
        // console.log(item)
        itemQty = itemQty+ 1;
        setItemQty(itemQty)
    }

    const decrementItemQty = () => {
        dispatch(removeItem(index))
        itemQty = itemQty-1;
        setItemQty(itemQty)
    }
    return (
        <div className="absolute flex bottom-0 shadow-lg px-4 py-2 bg-white text-green-800 rounded-lg text-sm" >
            {itemQty !== 0 && <button className="ml-2"  onClick={() => decrementItemQty()}> -</button>}
            <div className="px-2">{itemQty !== 0 &&  itemQty}</div>
            <button className="mr-2" onClick={() => handleAddItem()}>{itemQty === 0 ? "ADD +" : '+ '}</button>
        </div>
        
    )
}