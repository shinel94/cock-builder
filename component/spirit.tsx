import React, { useEffect, useState } from "react";
import { Spirit } from "../pages/api/spirit";

type SpiritComponentProps = {
  colorChange: (color: string) => void;
};

const SpiritComponent: React.FC<SpiritComponentProps> = (
  props: SpiritComponentProps
) => {
  const [spiritList, setSpiritList] = useState<Spirit[]>((): Spirit[] => {
    return [];
  });

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

  const spiritListComponent = spiritList.map((spirit, idx) => {
    return (
      <li
        key={idx}
        onClick={() => {
          props.colorChange(spirit.color);
        }}
      >
        {spirit.name}
      </li>
    );
  });
  return (
    <div>
      <h3>Spirit</h3>
      <ul>{spiritListComponent}</ul>
    </div>
  );
};

export default SpiritComponent;
