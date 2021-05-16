import React, { useState,useEffect } from "react";
import * as S from './search.styled'
import API from "../api";
const SearchContainer = ({ addPoke }) => {
  const [pokes, setPokes] = useState(null);
  const [updateState, setupdateState] = useState(false);
  const [pokesMain, setPokeMain] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await API.get("http://localhost:3030/api/cards", {}, undefined)
      const cardArr = response?.cards.map((val) => {
        const hpValue=(val.hp!=undefined && val.hp) > 100 ? 100 : val.hp;
        const strength=val.attacks!=undefined && (val.attacks.length==1 || val.attacks.length==2) ? val.attacks.length*50 : 0;
        const weaknesses=val.weaknesses!=undefined && val.weaknesses.length==1 ? 100 : 0;
        let damage=0;
        let dd=(val.attacks && val.attacks.forEach((value) => {
          let v=parseInt(value.damage.replace(/[^\w\s]/gi, ''));
          v=isNaN(v) ? 0 : v;
          damage +=v;
        }))
        const emogiValue = Math.abs(((hpValue / 10) + (damage /10 ) + 10 - (weaknesses)) / 5);
        return {...val, hover: false,hpValue,strength,weaknesses,damage,emogiValue}
      })
      console.log(response)
      console.log(cardArr)
      setPokes(cardArr)
      setPokeMain(cardArr)
    })();
  }, [])
  const searchPokes = (e)=> {
    console.log(e.target.value)
    if(e.target.value.length) {
      const searchData = pokes.filter((val,key)=> {
        return val.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ? true : false;
      })
      setPokes(searchData)
    } else {
      setPokes(pokesMain)
    }
  }
  const addPokes = (val) =>{
      addPoke(val)
  }
  const onMouseEnter =(index) => {
      setupdateState(Math.random(1000))
      setPokes((prevState) => {
        let data = prevState;
        data[index].hover = !data[index].hover;
        return data
      })
      
  }
  return (
    <S.TopContainer >
        <S.HeaderContainer>
          <S.InputBox>
            <S.Input type="text" onChange={searchPokes}/>
            <S.SearchImage src="search.png" className="searchImage" />
          </S.InputBox>
        </S.HeaderContainer>
        <S.BoxContainer>
        {pokes && pokes.length > 0 && pokes.map((val,key) => <S.Box key={key} onMouseEnter={()=>onMouseEnter(key)} onMouseLeave={()=>onMouseEnter(key)} >
            {val.hover &&  <S.AddButton onClick={() => addPokes(val)}>Add</S.AddButton>}
            <S.LeftBox>
              <S.PokeImage src={val.imageUrl && val.imageUrl}/>
            </S.LeftBox>
            <S.RightBox>
              <div className="topLabel">
                <h2>{val.name}</h2>
              </div>
              <div className="middleBox">
                  <div className="midBox">
                    <div className="lftBox">HP :</div> 
                    <div className="rytBox">
                    <S.ProgressBar className="pProgress"> 
                      <S.InnerProgress className="aProgress" width={val.hpValue}></S.InnerProgress> 
                    </S.ProgressBar>
                    </div>
                  </div>
                  <div className="midBox">
                    <div className="lftBox">STR :</div> 
                    <div className="rytBox">
                    <S.ProgressBar className="pProgress"> 
                      <S.InnerProgress className="aProgress" width={val.strength}></S.InnerProgress> 
                    </S.ProgressBar>
                    </div>
                  </div>
                  <div className="midBox">
                    <div className="lftBox">WEAK :</div> 
                    <div className="rytBox">
                    <S.ProgressBar className="pProgress"> 
                      <S.InnerProgress className="aProgress"  width={val.weaknesses}></S.InnerProgress> 
                    </S.ProgressBar>
                    </div>
                  </div>
              </div>
              <div className="midBox">
              <div className="lftBox">HAPPINESS :</div> 
                    <div className="rytBox">
                    {val.emogiValue}
                    </div>
              </div>
            </S.RightBox>
          </S.Box>)}
        </S.BoxContainer>
    </S.TopContainer>
          
  );
};

export default SearchContainer;
