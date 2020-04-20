import styled from 'styled-components';
import { Title } from '../Styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  @media (max-width: 501px) {
    font-size: 10px;
  }
`;

export const Food = styled.div`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  /* margin-top: 3px; */
  box-shadow: 0px 0px 2px 0px grey;
  transition-property: box-shadow margin-top filter background-size;
  transition-duration: 0.5s;
  @media (max-width: 501px) {
    background-size: cover;
  }
  &:hover {
    /* margin-top: 0px;
        margin-bottom: 3px; */
    cursor: pointer;
    box-shadow: 5px 5px 10px 0px grey;
    background-size: 115%;
    filter: contrast(1);
  }
`;
export const MenuStyled = styled.div`
  margin: 0px 400px 50px 20px;
  min-height: 1000px;
  height: 100%;
  @media (max-width: 900px) {
    margin: 0px 230px 50px 20px;
  }
  @media (max-width: 501px) {
    margin: 0px;
    padding: 20px;
    width: 85%;
  }
`;
