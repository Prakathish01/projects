import { RestaurantCard } from "./RestaurantCard";
import {SideSpaceRight,SideSpaceLeft} from "./SideSpace";
import { useState } from "react";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import { SWIGGY_API } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";


export const Body = () =>{
  const [listOFRestaurant,setListOFRestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] =useState([]);
  const [searchResult,setSearchResult] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setListOFRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }
  if (listOFRestaurant.length === 0)  {
    return (
      <div>
        <Shimmer/>
        <SideSpaceRight/>
        <SideSpaceLeft/>
      </div>
    )
  }; 
  if (!onlineStatus){
    return (
    <>
      <SideSpaceRight/>
      <SideSpaceLeft/>
      <h1 style={{display:"flex" ,alignItems:"center",justifyContent:"center"}}>Check your internet connection</h1>
    </>
    )
  };
  return (
  <div className="body">
    <div className="res-options">
      <input type="text" placeholder="Search" value={searchResult} 
        onChange={(e)=>{setSearchResult(e.target.value)}}
        /> 
      <button className="search-Button"
        onClick={()=>{
          const filteredList = listOFRestaurant.filter((res)=>
            res.info.name.toLowerCase().includes(searchResult.toLowerCase())
          )
          setFilteredRestaurant(filteredList);
        }}  
        >Search</button>
      <button className="top-rated-btn"
        onClick={()=>{
          const filteredList =listOFRestaurant.filter((res) => (res.info.avgRating) >4);
          setListOFRestaurant(filteredList)
        }}> Top Rated Restaurant </button>
    </div>
    <div className="res-container">
      <>
        {filteredRestaurant.map((restaurant)=>(
          <Link 
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard   resData ={restaurant} />
          </Link>
        ))}
        <SideSpaceRight/>    
        <SideSpaceLeft/>
      </>
    </div>
  </div>
)};