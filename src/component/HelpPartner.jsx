import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { HELP_SUPPORT_API } from "../utils/constant";

const HelpPartner = () => {
  const [show, setshow] = useState('');
  const [Contend, setContend] = useState([]);
  const { name } = useParams();
  // console.log(name);
  useEffect(() => {
    getPartner();
  }, []);
  const getPartner = async () => {
    const data = await fetch(HELP_SUPPORT_API + "/issues/partner-onboarding");
    const json = await data.json();
    // console.log(json);
    const item = json.data.issues.data;
    setContend(item);
    // console.log(item);
  };

  const handleDetail = (id)=>{
    console.log(id);
    setshow(id);
  }
  return (
    <div className=" pb-0 p-3 h-screen overflow-y-auto">
      <div className="font-semibold text-black text-4xl pb-4">Partner Onboarding</div>
      {Contend.map((item, index) => {
        return item.id === 492 ? (
          <div key={item.id} className="border-b-2 border-gray-400">
            <div className="hover:text-orange-400 text-xl">{item.title}</div>
            <div className="mt-2">
              <div className="text-lg">{item.hyperLinkText}</div>
              <button className="p-3 border-solid border-2 border-orange-500 text-xl text-orange-500 font-semibold">Send me Email</button>
              <div className="text-lg font-thin">{item.options[0].waitTime}</div>
            </div>
          </div>
        ) : (
          <div
            key={item.id}
            className="border-b-2 border-gray-300 p-7"
            onClick={() => {
              handleDetail(item.id);
            }}
          >
            <div className="hover:text-orange-400 cursor-pointer text-2xl ">
              {item.title}
            </div>
            <div className={show === item.id ? "mt-3 block" : "hidden"}>{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default HelpPartner;
