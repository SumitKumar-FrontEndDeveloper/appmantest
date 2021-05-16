import React, { Component, useState } from "react";
import "./App.css";
import MyPokes from './MyPokes'
import SearchContainer from './SearchContainer'
import * as S from './App.styled'

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [myPokes, setMyPokes] = useState([]);
  const [updateState, setupdateState] = useState(false);
  const toggleSearchPopup = (e) => {
    if(e.target.id=='popup'){
      setToggle((prevState) => !prevState)
    }
  }
  const addPoker =(val) => {
      if(myPokes.find((value) => value.id==val.id)==undefined){
          val.deleteBtn=false;
          setMyPokes([...myPokes, val])
      }
  }
  const deletePoke = (index) =>{
      setMyPokes((prevState) => prevState.slice(0,index).concat(prevState.slice(index+1)))
  }
  const onHoverMouse = (index) =>{
    setupdateState(Math.random(1000))
    setMyPokes((prevState) => {
      let data = prevState;
      data[index].deleteBtn = !data[index].deleteBtn;
      return data
    })
  }
  return (
      <div className="App">
        {toggle && <S.PopUpContainer onClick={toggleSearchPopup} id="popup">
            <SearchContainer addPoke={addPoker}/>
        </S.PopUpContainer>}
        <MyPokes addPokes={setToggle} pokes={myPokes} deletePoke={deletePoke} onMouseEnterForDeleteItem={onHoverMouse} />   
        
      </div>
    );
  
}
export default App;
