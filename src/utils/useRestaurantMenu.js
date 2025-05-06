import { useEffect, useState } from "react";
import { RES_MENU_API} from "../utils/constants"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    //since dependencies array [] is empty it will only load once after initial render 
    useEffect(() => {
        fetchData()
    }, []);
    //fetch data
    const fetchData = async () => {
        const data = await fetch(RES_MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();

        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestaurantMenu;