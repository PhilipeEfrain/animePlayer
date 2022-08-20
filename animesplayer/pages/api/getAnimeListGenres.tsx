import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { animeGenres } from "./type";

const baseURL = "https://theanimesapi.herokuapp.com";

export default async function getAnimeListGenres(
  req: NextApiRequest,
  res: NextApiResponse<animeGenres>
) {
  const { data } = await axios.get(`${baseURL}/genres/acao`);
  res.status(200).json(data);
}
