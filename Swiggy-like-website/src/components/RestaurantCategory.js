import { ItemsSlot } from "./ItemsSlot";
import { useState } from "react";

export const RestaurantCategory = ({data}) =>{
  const [showItems,setShowItems] = useState(false);
  const [arrowSide,setArrowSide] = useState("🔻")
  const handleClick = () => (
    <>
      {setShowItems(!showItems)}
      {setArrowSide(arrowSide === "🔻" ? "🔺" : "🔻")}
    </>
  );
  return (
    <div>
      <div className="flex justify-between w-6/12 mx-auto my-3 bg-[#c6c6c6] shadow-lg h-7 italic font-bold rounded cursor-pointer" onClick={handleClick}>
        <span className="ml-1.5">{data.title} ({data.itemCards.length})</span>
        <span >{arrowSide}</span>
      </div>
      <div>
        {showItems && < ItemsSlot items ={data}/>}
      </div>
    </div>
  )
};