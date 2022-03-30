import React, { useEffect, useState } from "react";
import { Ingredient } from "../pages/api/ingredient";

type IngredientComponentProps = {
  colorChange: (color: string) => void;
};

const IngredientComponent: React.FC<IngredientComponentProps> = (props: IngredientComponentProps) => {
  const [ingredientList, setIngredientList] = useState<Ingredient[]>((): Ingredient[] => {
    return [];
  });

  const getIngredientList: () => void = () => {
    fetch(`/api/ingredient`, {
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
        setIngredientList(data.ingredient_list);
      });
  };

  useEffect(() => {
    getIngredientList();
  }, []);

  const ingredientListComponent = ingredientList.map((ingredient, idx) => {
    return <li key={idx} onClick={() => {props.colorChange(ingredient.color)}}>{ingredient.name}</li>;
  });
  return (
    <div>
      <h3>Ingredient</h3>
      <ul>{ingredientListComponent}</ul>
    </div>
  );
};

export default IngredientComponent;
