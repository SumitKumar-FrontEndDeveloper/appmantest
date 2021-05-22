import React, { useState } from "react";
import "./MyPokes.css";
import * as S from './MyPokes.styled'

const MyPokes = ({ addMainTask,addPokes,pokes, deletePoke, onMouseEnterForDeleteItem }) => {
  const [clickAdd, setClickAdd] = useState(false);
  const addPoke =() => {
      addPokes(!clickAdd)
  }
 const delPoke =(key) =>{
  deletePoke(key)
 }
 const onMouseEnter =(index) => {
  onMouseEnterForDeleteItem(index)
}
  console.log("pokes",pokes)
  return (
    <div>
          <div className="myPockHeader">
              <h2>My Pokedex</h2>
          </div>
         <S.BoxContainer>
           {pokes.length>0 && pokes.map((val,key) => <div className="box" key={key} onMouseEnter={()=>onMouseEnter(key)} onMouseLeave={()=>onMouseEnter(key)}>
            <div className="close" onClick={() => delPoke(key)}></div>
            <div className="leftBox">
              <img src={val.imageUrl}/>
            </div>
            <div className="rightBox">
              <div className="topLabel">
                <h2>{val.name}</h2>
              </div>
              <div className="middleBox">
                  <div className="midBox">
                    <div className="lftBox">HP :</div> 
                    <div className="rytBox">
                    <S.ProgressBar className="pProgress"> 
                      <S.InnerProgress className="aProgress" width={val.hp > 100 ? 100 : val.hp}></S.InnerProgress> 
                    </S.ProgressBar>
                    </div>
                  </div>
                  <div className="midBox">
                    <div className="lftBox">STR :</div> 
                    <div className="rytBox">
                    <S.ProgressBar className="pProgress"> 
                      <S.InnerProgress className="aProgress"></S.InnerProgress> 
                    </S.ProgressBar>
                    </div>
                  </div>
                  <div className="midBox">
                    <div className="lftBox">WEAK :</div> 
                    <div className="rytBox">
                    <S.ProgressBar className="pProgress"> 
                      <S.InnerProgress className="aProgress"></S.InnerProgress> 
                    </S.ProgressBar>
                    </div>
                  </div>
              </div>
              <div className="imoziBox">
                  <span>&#128513;</span>
              </div>
            </div>
          </div>)}
        </S.BoxContainer>
        <div className="bottomDiv">
            <div className="plus" onClick={addPoke}></div>
        </div>
        </div>
  );
};

export default MyPokes;
