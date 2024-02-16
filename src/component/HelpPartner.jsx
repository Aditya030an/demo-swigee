import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { HELP_SUPPORT_API } from "../utils/constant";

const HelpPartner = () => {
  const [Contend, setContend] = useState([]);
  const { name } = useParams();
  console.log(name);
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
  return (
    <div>
      <div>
        {Contend.map((item, index) => {
          return item.id === 492 ? (
            <div key={item.id}>
              <div>{item.title}</div>
              <div>
                <div>{item.hyperLinkText}</div>
                <button>Send me Email</button>
                <div>{item.options[0].waitTime}</div>
              </div>
            </div>
          ) : (
            <div key={item.id}>
                <div>{index}{item.title}</div>
                <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HelpPartner;
