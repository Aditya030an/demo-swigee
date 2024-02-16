import Shimmer from "../utils/Shimmer";
import { TOP_IMAGE } from "../utils/constant";
import data from "../utils/data";
import { Link } from "react-router-dom";
const Top = () => {
  // const [tittle, setTittle] = useState("");
  // const [top, setTop] = useState([]);
  const json = data();
  const topData = json[1]?.card?.card;
  // console.log(topData);
  const tittle = topData?.header?.title;
  const insideTop = topData?.gridElements?.infoWithStyle?.restaurants;
  // console.log(tittle);
  // console.log(insideTop);
  // if (insideTop === undefined) return null;
  return insideTop === undefined ? (
    <Shimmer />
  ) :  (
    <div className=" w-9/12 mx-auto my-4  flex flex-col gap-4">
      <div className="text-3xl font-bold font-sans">{tittle}</div>
      <div className="w-full overflow-auto ">
        <div className=" w-screen flex ">
          <div className=" flex content-center">
            {(
              insideTop.map((item) => {
                // console.log(item);
                return (
                  <div>
                  <Link to={"/restaurents/" + item?.info?.id} key={item?.info?.id}>
                  <div
                    key={item?.info?.id}
                    className="flex flex-col w-96 p-3 mb-3 hover:scale-95 transition-all ease-in-out "
                  >
                    <img
                      src={TOP_IMAGE + item.info.cloudinaryImageId}
                      className="w-96 aspect-video rounded-3xl scale-100 -z-50"
                    />

                    {/* <span className="text-3xl  font-semibold">{item?.info?.aggregatedDiscountInfoV3?.header}</span> */}
                    {item?.info?.aggregatedDiscountInfoV3?.header ? (
                      <h1 className="text-2xl text-orange-200 -mt-9 ml-3 font-bold truncate">
                        {item?.info?.aggregatedDiscountInfoV3?.header +
                          " " +
                          item?.info?.aggregatedDiscountInfoV3?.subHeader}
                      </h1>
                    ) : (
                      <h1 className="opacity-100"></h1>
                    )}
                    <p className="mx-3 text-xl font-bold mt-2 truncate">
                      {item?.info?.name}
                    </p>
                    <p className="mx-3 flex gap-3">
                      <p className="font-semibold text-xl truncate">
                        {item?.info?.avgRatingString}
                      </p>
                      <p className="font-black text-4xl -mt-4">.</p>
                      <p className="font-semibold text-xl truncate">
                        {item?.info?.sla.slaString}
                      </p>
                    </p>
                    <p className="mx-3 font-normal text-xl text-gray-400 truncate">
                      {item?.info?.sla.lastMileTravelString}
                    </p>
                    <p className="mx-3 font-normal text-xl text-gray-400 tracking-tighter truncate">
                      {item?.info?.cuisines.join(" , ")}
                    </p>
                    <p className="mx-3 font-normal text-xl text-gray-400 truncate">
                      {item?.info?.locality}
                    </p>
                  </div>
                  </Link>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
