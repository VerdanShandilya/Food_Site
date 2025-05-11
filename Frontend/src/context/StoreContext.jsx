import { createContext, useEffect, useState } from "react";
import axios from 'axios'

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

    const gettotal = () =>{
        let totalamount=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo=food_list.find((product) =>product._id===item);
                totalamount+=iteminfo.price*cartitems[item];
            }
        }
        return totalamount
    }

    const [token,settoken] = useState("");

    const getfoodlist = async () =>{
        const response = await axios.get("http://localhost:4000/api/food/list");
        setfoodlist(response.data);
    }
    
    useEffect(() =>{
        if(localStorage.getItem("token")){
            settoken(localStorage.getItem("token"));
        }
        async function localData(){
            await getfoodlist();
        }
        localData();
    },[])

    const [food_list,setfoodlist] = useState([]);


    const contextValue = {
        food_list,
        addtocart,
        setcartitems,
        cartitems,
        removefromcart,
        gettotal,
        token,
        settoken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;