import React from "react";

import { Container, Img, Text } from "./styles";

const CardList: React.FC = () => {
  return (
    <Container>
      <Img imgUrl="https://c4.wallpaperflare.com/wallpaper/295/163/719/anime-anime-boys-picture-in-picture-kimetsu-no-yaiba-kamado-tanjir%C5%8D-hd-wallpaper-preview.jpg" />
      <Text>Full Metal Achemist</Text>
    </Container>
  );
};

export default CardList;
