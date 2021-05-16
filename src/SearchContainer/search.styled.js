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


export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    position:relative;
`;

export const myPockHeader = styled.div`
  position: absolute;
  right: 16px;
  top: 18px;
  cursor: pointer;
  width: 40px;
  height: 35px;
`;

export const InputBox = styled.div`
    width: 100%;
    padding: 16px;
`;

export const Input = styled.input`
    width: 100%;
  padding: 5px 0px;
  font-family: 'Atma', cursive;
  font-size: 20px;;
`;
export const SearchImage = styled.img`
  position: absolute;
  right: 16px;
  top: 18px;
  cursor: pointer;
  width: 40px;
  height: 35px;
`;
export const TopContainer = styled.div`
    background-color:#fff;
    z-index:99;
    height: 683px;
    overflow: scroll;
`;

export const AddButton = styled.div`
    position: absolute;
    top: 3px;
    right: 11px;
    z-index: 9999;
    font-size: 22px;
    color:${COLORS.Darkness};
    cursor: pointer;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    height: 600px;
    overflow: scroll;
`;
export const Box = styled.div`
      width: 98%;
      margin:1%;
      background-color: rgb(214, 214, 214);
      display: flex;
      flex-direction: row;
      position:relative;
`;
export const LeftBox = styled.div`
      width: 15%;
`;
export const RightBox = styled.div`
    width: 85%;
    padding-left: 10px;
    padding-right: 10px;
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

export const PokeImage = styled.img`
    width: 100%;
`;
