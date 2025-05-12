import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cart = useSelector((store) => store.cart.items)
    // console.log(cart)


    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center mt-28 m-10 p-10 ">
            <h1 className="text-2xl font-bold pb-8">Cart Page</h1>
            <div className="text-right"><button className="border-2 p-2" onClick={handleClearCart}>Clear Cart</button></div>
            {
                cart?.length === 0 && <div>Add Item to cart</div>
            }
            <ItemList cardItem={cart}/>
        </div>
    )
}

export default Cart;