import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { animeListGenres } from "./type";

const baseURL = "https://theanimesapi.herokuapp.com";

export default async function getListGenres(
  req: NextApiRequest,
  res: NextApiResponse<animeListGenres>
) {
  const { data } = await axios.get(`${baseURL}/listgenres/`);
  res.status(200).json(data);
}
