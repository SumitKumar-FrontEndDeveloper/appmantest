import styled, {css} from 'styled-components'

const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b",
};


export const PopUpContainer = styled.div`
    background: red;
    height: 90%;
    width: 90%;
    background-color: rgba(0,0,255,0.5);
    position:absolute;
    padding:50px;
    z-index:999;
`;