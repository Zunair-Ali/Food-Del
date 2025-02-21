import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisply from '../../components/FoodDisply/FoodDisply'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisply category={category} />
      <AppDownload/>
    </div>
  )
}

export default Home
