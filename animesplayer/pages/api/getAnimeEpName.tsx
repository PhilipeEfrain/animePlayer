import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { epAnime } from "./type";

const baseURL = "https://theanimesapi.herokuapp.com";

export default async function getAnimeEpName(
  req: NextApiRequest,
  res: NextApiResponse<epAnime>
) {
  const { data } = await axios.get(`${baseURL}/episode/e0d741f6`);
  res.status(200).json(data);
}
