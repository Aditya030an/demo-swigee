import { useDispatch , useSelector } from "react-redux";
import sideSlice, { removeComponent, } from "../utils/sideSlice";
import { useState , useEffect } from "react";
import StateCard from "./StateCard";
import filterData from "../utils/filterData";
import { setInput } from "../utils/sideSlice";
// const [show , setshow] = useState(false);
// setshow(useSelector((store)=>store.side.isSideBar));


const SideLocation = () => {

  const [state, setState] = useState([]);
  const [filterState, setFilterstate] = useState([]);
  const [text, setText] = useState("");
  

  useEffect(() => {
    getState();
  }, []);

  const getState = async () => {
    const data = await fetch(
      // "https://countriesnow.space/api/v0.1/countries/states"
      "https://countriesnow.space/api/v0.1/countries/states"
    );
    const json = await data.json();
    console.log(json.data);
    const country = json?.data?.filter((item) => item?.name === "India");
    console.log(country[0]?.states);
    setState(country[0]?.states);
    // setFilterstate(country[0]?.states);
  };

  const isSideBar = useSelector((store)=>store.side.isSideBar);
  const dispatch = useDispatch();
  const handleShow = ()=>{
    dispatch(removeComponent());
    console.log(isSideBar);
  }
  const setInputState = (value)=>{
    dispatch(setInput(value));
  }
  if(isSideBar) return null; 
  return (
    <div className="  w-full h-screen flex justify-center absolute backdrop-blur-md top-0 z-50 ">
    <div className=" w-1/3 h-5/6 m-auto flex justify-around gap-3 flex-col p-2 ">
      <div className=" h-1/5  flex">
        <input
          type="text"
          placeholder="Enter location"
          className=" w-11/12 h-4/5 outline-none text-2xl m-auto p-4 shadow-xl "
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (e.target.value == '') {
              setFilterstate('');
            }
          }}
        />
        <p
          className="text-2xl font-black m-auto cursor-pointer"
          onClick={() => {
            handleShow();
          }}
        >
          X
        </p>
      </div>
      <button
        className=" bg-blue-500 rounded-md text-white text-lg p-3 w-full "
        onClick={() => {
          const data = filterData(text, state);
          console.log(data);
          text.length !== 0 ? setFilterstate(data) : setFilterstate("");
        }}
      >
        Search
      </button>
      <div className=" h-full overflow-y-auto flex flex-col gap-2 p-3">
        {filterState.length === 0 ? (
          <h1>Please enter the currect state</h1>
        ) : (
          filterState.map((item) => {
            console.log(item);
            return (
              <button
                className=""
                onClick={() => {
                  text.length === 0
                    ? setInputState("")
                    : setInputState(item.name);
                    handleShow();
                }}
              >
                <StateCard key={item.state_code} name={item.name} />
              </button>
            );
          })
        )}
      </div>
    </div>
  </div>
  ) ;
};

export default SideLocation;
