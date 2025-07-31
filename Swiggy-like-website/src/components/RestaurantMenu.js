import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";


export const RestaurantMenu = () =>{

  const {resId} = useParams();
  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer/>;

  //const infoCard = resMenu?.cards?.find(
  //  (card) => card?.card?.card?.info
  //);
  const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.card?.info?.name
  const infoCardPath = resMenu?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } =  infoCardPath || {};

  return (    
    <div>
      <h1>{name}</h1>
      <p>[ {cuisines.join(", ")} ] - [ {costForTwoMessage} ]</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item)=>(
        <li key={item?.card?.info?.id}>
          {item?.card?.info?.name} - 
          {" Rs."}{((item?.card?.info?.price)/100) || ((item.card.info.defaultPrice)/100)}
        </li>
        ))};
      </ul>
    </div>
)
}