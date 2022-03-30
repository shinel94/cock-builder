// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const IngredientOption = {
  liquid: "liquid",
  solid: "solid",
  etc: "etc",
};

export type Ingredient = {
  name: string;
  color: string;
  type: string;
};

type Data = {
  ingredient_list: Ingredient[];
};

const supply_ingredient_list: Ingredient[] = [
  {
    name: "water",
    color: "#0060f050",
    type: IngredientOption.liquid,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ ingredient_list: supply_ingredient_list });
}
