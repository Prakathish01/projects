import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard";
import { SideSpaceRight, SideSpaceLeft } from "./SideSpace";
import { useState, useEffect, useContext } from "react";
import { SWIGGY_API } from "../utils/constants";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
// import { UserContext } from "../utils/UserContext";

export const Body = () => {
  const [listOFRestaurant, setListOFRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const onlineStatus = useOnlineStatus();

  // const { loggedInId, setUserName } = useContext(UserContext);

  const RestaurantPromoted = WithPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const restaurantPath =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredRestaurant(restaurantPath);
    setListOFRestaurant(restaurantPath);
  };
  if (listOFRestaurant.length === 0) {
    return (
      <div>
        <Shimmer />
        <SideSpaceRight />
        <SideSpaceLeft />
      </div>
    );
  }
  if (!onlineStatus) {
    return (
      <>
        <SideSpaceRight />
        <SideSpaceLeft />
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Check your internet connection
        </h1>
      </>
    );
  }
  return (
    <div className="pt-[70px] pl-[164px] pr-[164px]">
      <div className="flex justify-center mt-2 items-center h-5 w-auto ">
        <input
          className="rounded-xl px-3 py-1"
          type="text"
          placeholder="Search"
          value={searchResult}
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
        />
        <button
          className="search-Button ml-2 bg-[#ffa647] text-white px-3 py-1 rounded-xl cursor-pointer"
          onClick={() => {
            const filteredList = listOFRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchResult.toLowerCase()),
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="ml-2 bg-[#ffa647] text-white px-3 py-1 rounded-xl cursor-pointer"
          onClick={() => {
            const filteredList = listOFRestaurant.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurant{" "}
        </button>
        {/* <label>User :</label> */}
        {/* <input type="text" className="p-1 cursor-pointer border border-[#c6c6c6] " value={loggedInId} onChange={(e) => (e.target.value)} /> */}
      </div>
      <div className="flex justify-evenly flex-wrap">
        <>
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
          <SideSpaceRight />
          <SideSpaceLeft />
        </>
      </div>
    </div>
  );
};
