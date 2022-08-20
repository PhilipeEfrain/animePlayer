import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { animeInfo } from "./type";

const baseURL = "https://theanimesapi.herokuapp.com";

export default async function getAnimeInfo(
  req: NextApiRequest,
  res: NextApiResponse<animeInfo>
) {
  const { data } = await axios.get(`${baseURL}/anime/naruto-classico`);
  res.status(200).json(data);
}
