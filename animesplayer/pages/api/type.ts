export type animeList = {
  nextPage: string;
  animes: animes[];
};
export type animeGenres = {
  nextPage: string;
  animes: animes[];
};
export type animes = {
  id_page: number;
  title: string;
  AnimeDetails: string;
  slug: string;
  posterImg: string;
};

export type animeInfo = {
  anime_info: {
    title: string;
    desc: string;
    posterImg: string;
    epslenght: number;
    type: string;
    year: number;
    genres: string[];
    eps: eps[];
  };
};
export type eps = {
  ep: number;
  img: string;
  url: string;
};
export type epAnime = {
  Anime_Episodes: {
    url_video: string;
    poster_image: string;
    number_ep: string;
  };
};
export type animeListGenres = {
  genres: genres[];
};
export type genres = {
  genres: {
    id_page: number;
    title: string;
    poster_img: string;
    url_genre: string;
  };
};
