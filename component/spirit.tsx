import React, { useEffect, useState } from "react";
import { SpiritType } from "../pages/api/spirit";

const Spirit: React.FC = () => {
  const [spiritList, setSpiritList] = useState<SpiritType[]>(
    (): SpiritType[] => {
      return [];
    }
  );

  const getSpiritList = () => {
    fetch(`/api/spirit`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            throw new Error(data.message);
          });
        }
      })
      .then((data) => {
        setSpiritList(data.spirit_list);
      });
  };

  useEffect(() => {
    getSpiritList();
  }, []);

  const spiritComponent = spiritList.map((spirit, idx) => {
    return <li key={idx}>{spirit.name}</li>;
  });
  return (
    <div>
      <h3>Spirit</h3>
      <ul>{spiritComponent}</ul>
    </div>
  );
};

export default Spirit;
