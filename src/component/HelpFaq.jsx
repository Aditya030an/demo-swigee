import React, { useEffect, useState } from "react";
import { HELP_SUPPORT_API } from "../utils/constant";

const HelpFaq = () => {
  const [show, setshow] = useState('');
  const [Contend, setContend] = useState([]);
  useEffect(() => {
    getLegal();
  }, []);
  const getLegal = async () => {
    const data = await fetch(HELP_SUPPORT_API + "/issues/faq");
    const json = await data.json();
    //   console.log(json);
    const item = json.data.issues.data;
    setContend(item);
    console.log(item);
  };
  const handleDetail = (id)=>{
    console.log(id);
    setshow(id);
  };
  return (
    <div className="pb-0 p-3 h-screen overflow-y-auto">
      <div className="font-semibold text-black text-4xl">FQAs</div>
      {Contend.map((item, index) => {
        return (
          <div key={item.id} className="border-b-2 border-gray-400 p-7" onClick={() => {
            handleDetail(item.id);
          }}>
            <div className="hover:text-orange-400 cursor-pointer text-2xl ">
              {item?.title}
            </div>
            <div className={show === item.id ? "mt-3 block" : "hidden"}>
              <button className="p-3 border-solid border-2 border-orange-500 text-xl text-orange-500 font-semibold">Send me Email</button>
              <div className="text-lg font-thin ">{item?.options[0]?.waitTime}</div>
              <div className="mt-6">{item?.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HelpFaq;
