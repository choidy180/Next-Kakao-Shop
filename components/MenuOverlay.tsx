import styled from "styled-components";

export default function MenuOver(){
  const MenuClose = () => {
    document.getElementById("viewingMenu").classList.toggle("clickFocus");
    document.getElementById("viewingMenuDetail").classList.toggle("FocusMenuDetail");
  }
  return (
    <MenuClick id="viewingMenu">
      <ClickContent id="viewingMenuDetail">

      </ClickContent>
      <ClickBlind onClick={MenuClose}/>
    </MenuClick>
  )
}

const MenuClick = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 999990;
  display: none;
  transition: .5s all ease-in-out;
`
const ClickContent = styled.div`
  width: 400px;
  height: 100%;
  left: -400px;
  top: 0;
  background-color: white;
  position: fixed;
  z-index: 999999;
  transition: .5s all ease-in-out;
` 
const ClickBlind = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  z-index: 99999;
  opacity: 0.5;
`