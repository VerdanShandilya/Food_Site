import React, {useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import { assets } from '../assets/assets'
import { FoodItem } from './FoodItem'

export const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
        {food_list.map((item, key) =>{
          if(category=='All' || category===item.category){
            return(
                <FoodItem key={key} item={item} category={category} />
            )
          }
        })}
        
        </div>
    </div>

  )
}
