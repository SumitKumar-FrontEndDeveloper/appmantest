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


export const BoxContainer = styled.div`
    display: flex;
    flex-direction: grid;
    flex-wrap: wrap;
    align-items: center;
    height: 600px;
    padding-top:60px;
    overflow: scroll;
`;
export const ProgressBar = styled.div`
    width: 100%;
    background-color: rgb(223, 215, 215);
    height: 20px;
    border: 1px solid #95afc0;
    border-radius: 12px;
`;

export const InnerProgress = styled.div`
    background-color:${COLORS.Fairy};
    height: 20px;
    z-index: 10;
    border-radius: 12px;
    ${(props)=> {
      return css `
        width : ${props.width}%
      `
    }}
`;

