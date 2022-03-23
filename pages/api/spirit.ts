// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type SpiritType = {
  name: string;
  color: string;
};

type Data = {
  spirit_list: SpiritType[];
};

const supply_spirit_list: SpiritType[] = [
  {
    name: "vodka",
    color: "#0060f050",
  },
  {
    name: "jin",
    color: "#0060f050",
  },
  {
    name: "rum",
    color: "#0060f050",
  },
  {
    name: "whisky",
    color: "#0060f050",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ spirit_list: supply_spirit_list });
}
