import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import getAnimeList from "./api/getAnimeApi";
import { animeList } from "./api/type";
import CardList from "./componets/CardList";
// import { Container } from './styles';

const Home: React.FC = () => {
  const [listAnimes, setListAnimes] = useState<animeList>();

  useEffect(() => {
    getAnimeList();
  }, []);

  return (
    <>
      <div>menu</div>
      <div>lista</div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
