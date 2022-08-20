import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { animeList } from "./type";

const baseURL = "https://theanimesapi.herokuapp.com";

export default async function getAnimeList(
  req: NextApiRequest,
  res: NextApiResponse<animeList>
) {
  const { data } = await axios.get(`${baseURL}/listanimes/1`);
  res.status(200).json(data);
}
