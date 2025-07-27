import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({resData}) =>{
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime

  } = resData?.info || {};
  return (
  <div className="res-card">
    <img src={CDN_URL+ cloudinaryImageId}/>
    <p className="res-name" 
    style={{fontWeight: "bold" ,fontStyle:" italic"}}>{name}</p>
    <p className="res-cuisine">{cuisines.join(", ")}</p>
    <p className="res-ratings">{avgRating}</p>
    <p className="res-cost">{costForTwo}</p>
    <p className="res-delivery-time">{deliveryTime}</p>
  </div>
)};