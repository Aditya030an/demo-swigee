import React, { useEffect, useState } from "react";
import { HELP_SUPPORT_API } from "../utils/constant";

const HelpLegal = () => {
  const [Contend, setContend] = useState([]);
  useEffect(() => {
    getLegal();
  }, []);
  const getLegal = async () => {
    const data = await fetch(HELP_SUPPORT_API + "/issues/legal");
    const json = await data.json();
    //   console.log(json);
    const item = json.data.issues.data;
    setContend(item);
    // console.log(item);
  };
  return (
    <div>
      <div>
        {Contend.map((item, index) => {
          return (
            <div key={item.id}>
              <div>
                {index}
                {item.title}
              </div>
              <div>{item.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HelpLegal;
