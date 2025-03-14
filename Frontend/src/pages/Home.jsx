import React, { useState } from 'react'
import './Home.css'
import {Header} from '../components/Header'
import { ExploreMenu } from '../components/ExploreMenu'
import { FoodDisplay } from '../components/FoodDisplay'
import { AppDownload } from '../components/AppDownload'

export const Home = () => {
  const [category,setcatogery] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setcategory={setcatogery} />
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}
