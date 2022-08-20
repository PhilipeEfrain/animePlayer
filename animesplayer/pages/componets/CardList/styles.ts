import styled from "styled-components";

export interface Props {
  imgUrl: string;
}

export const Container = styled.div`
  /* width: 200px;
  height: 300px;
  background-color: #fff; */
  border-radius: 4px;
`;
export const Img = styled.div<Props>`
  width: 200px;
  height: 300px;
  background: url(${(props) => props.imgUrl});
  background-position: center center;
  background-size: auto;
  border-radius: 4px;
`;
export const Text = styled.h3`
  margin-top: 8px;
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;
