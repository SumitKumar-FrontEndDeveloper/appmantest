import React, { Component, useState } from "react";
import "./App.css";
import MyPokes from './MyPokes'
import SearchContainer from './SearchContainer'
import * as S from './App.styled'
import { useDispatch, useSelector } from "react-redux";
import { pokeListRequest } from './actions/pokes/pokes'

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [myPokes, setMyPokes] = useState([]);
  const { pokeList } = useSelector((state) => state.pokeReducer);
  const dispatch = useDispatch();
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
      setMyPokes((prevState) => {
        dispatch(pokeListRequest({pokeList : [prevState[index], ...pokeList]}))
        return prevState.slice(0,index).concat(prevState.slice(index+1));
      })
  }

  return (
      <div className="App">
        {toggle && <S.PopUpContainer onClick={toggleSearchPopup} id="popup">
            <SearchContainer addPoke={addPoker}/>
        </S.PopUpContainer>}
        <MyPokes addPokes={setToggle} pokes={myPokes} deletePoke={deletePoke}  />   
        
      </div>
    );
  
}
export default App;
