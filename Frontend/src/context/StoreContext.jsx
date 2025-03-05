import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{


    const [cartitems,setcartitems] = useState({});
    const addtocart = (itemid) =>{
        if(!cartitems[itemid]){
            setcartitems((prev) => ({...prev, [itemid]: 1}));
        }
        else{
            setcartitems((prev) => ({...prev, [itemid]: prev[itemid] +1}))
        }
    }
    const removefromcart = (itemid) =>{
        setcartitems((prev) => ({...prev,[itemid]:prev[itemid]-1}))
    }
    const contextValue = {
        food_list,
        addtocart,
        setcartitems,
        cartitems,
        removefromcart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;