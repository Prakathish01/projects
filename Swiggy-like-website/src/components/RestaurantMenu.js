import { useEffect, useState } from "react"
import { Shimmer } from "./Shimmer";
import { RES_MENU } from "../utils/constants";
import { useParams } from "react-router";


export const RestaurantMenu = () =>{
  const [resMenu,setResMenu] = useState(null);

  const {resId} = useParams();
  console.log(resId);

  const fetchMenu = async ()=>{
    const url = (RES_MENU + resId)
    console.log(url)
    const data = await fetch(url);
    const json = await data.json();
    
    setResMenu(json.data);
    console.log(json);
  }
  useEffect(()=>{
    fetchMenu();
  },[]);
 console.log(resMenu);
  if (resMenu === null) return <Shimmer/>;

  //const infoCard = resMenu?.cards?.find(
  //  (card) => card?.card?.card?.info
  //);
  const {itemCards} = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.card?.info?.name
  console.log(itemCards[1].card.info);
  const infoCardPath = resMenu?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } =  infoCardPath || {};

  return (    
    <div>
      <h1>{name}</h1>
      <p>[ {cuisines.join(", ")} ] - [ {costForTwoMessage} ]</p>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item)=>(
        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs."}{((item?.card?.info?.price)/100) || ((item.card.info.defaultPrice)/100)}</li>
        ))}
      </ul>
    </div>
)
}
//<li>{itemCardPath.itemCards[0].card.info.name}</li>