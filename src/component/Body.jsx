import Mind from "./Mind";
import Top from "./Top";
import Restaurent from "./Restaurent";
import Filter from "./Filter";


const Body = () => {
  return (
    <>
      <Filter/>
      <div className="flex flex-col">
        <Mind />
        <Top />
        <Restaurent />
      </div>
    </>
  );
};
export default Body;
