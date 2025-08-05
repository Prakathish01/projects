import { CDN_URL } from "../utils/constants";
export const ItemsSlot = ({ items }) => {
  const data = items?.itemCards;
  return (
    <div className="w-6/12 mx-auto">
      {data.map((d) => (
        <div key={d?.card?.info?.id}>
          <div className="flex border-b justify-between p-1 shadow-lg m-1 min-h-[120px]">
            <div className="text-left w-9/12 px-1 py-0.5">
              {/* details */}
              <span className="font-bold text-base">
                {d?.card?.info?.name} - ₹{(d?.card?.info?.price || d?.card?.info?.defaultPrice) / 100}
              </span>
              <p className="mt-0.5 text-sm">{d?.card?.info?.description}</p>
            </div>
            <div className="relative w-3/12 flex items-center justify-center">
              {/* image */}
              <div className="relative flex flex-col items-center">
                <img
                  className="w-[100px] h-[80px] object-cover rounded"
                  src={CDN_URL + d?.card?.info?.imageId}
                  alt={d?.card?.info?.name}
                />
                <button className="absolute -bottom-3 bg-white text-[#ff4603] rounded-lg px-2.5 py-0.5 shadow-md">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
