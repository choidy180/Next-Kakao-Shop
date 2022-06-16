import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { NotificationsOutline } from "react-ionicons";
import styled from "styled-components";
import { authService } from "../firebase/firebase";

export default function MenuOver(props){
  const [userInfo, setUserInfo] = useState<any>(null);
  const MenuCloseRouter = () => {
    document.querySelector(".clickFocus") && document.getElementById("viewingMenu")?.classList.toggle("clickFocus");
    document.querySelector(".FocusMenuDetail") && document.getElementById("viewingMenuDetail")?.classList.toggle("FocusMenuDetail");
  }
  const router = useRouter();
  router.events?.on('routeChangeStart', MenuCloseRouter)
  const MenuClose = () => {
    document.getElementById("viewingMenu").classList.toggle("clickFocus");
    document.getElementById("viewingMenuDetail").classList.toggle("FocusMenuDetail");
  }
  const viewInfo = () => {
    console.log(props);
  }
  const LogOutClick = async () => {
    await authService.signOut();
    await router.replace("/");
  }
  return (
    <>
      <ClickContent id="viewingMenuDetail">
        <Head>
          <Name>
            {!props?.uid ?
            <Link href={"/login"}>
              로그인이 필요해요!
            </Link>:
              "최은지님 반갑습니다!"
            }
          </Name>
          <HeadIcon>
            {!props?.uid ? <span>비회원 주문 조회 &gt;</span> : <LogOut onClick={LogOutClick}>로그아웃</LogOut>}
          </HeadIcon>
        </Head>
        <img src="/images/banner/MenuDetail_Banner.png" alt="" onClick={viewInfo}/>
        <MenuTabBox>
          <MenuTab>장바구니 내역</MenuTab>
          <MenuTab>주문·배송 내역</MenuTab>
          <MenuTab>캐릭터</MenuTab>
          <MenuTab>카테고리</MenuTab>
          <MenuTab>프렌즈 별다꾸</MenuTab>
          <MenuTab>배경화면</MenuTab>
          <MenuTab>공지사항</MenuTab>
          <MenuTab>고객센터</MenuTab>
          <MenuTab>기프트카드 조회·환불</MenuTab>
          <MenuTab>카카오프렌즈샵 안내</MenuTab>
        </MenuTabBox>
        <img src="/images/banner/PlusMenu.png" alt="" />
      </ClickContent>
      <MenuClick id="viewingMenu">
        <ClickBlind onClick={MenuClose}/>
      </MenuClick>
    </>
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
  height: auto;
  min-height: 100%;
  left: -400px;
  top: 0;
  background-color: white;
  position: fixed;
  z-index: 999999;
  transition: .2s all ease-in-out;
  box-sizing: border-box;
  padding: 35px 20px;
  img{
    width: 100%;
    margin-top: 12px;
    border-radius: 6px;
    cursor: pointer;
    padding-bottom: 20px;
  }
` 
const Head = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`
const Name = styled.p`
  font-size: 1.4rem;
  span {
    cursor: pointer;
    font-family: 'NEXON Lv1 Gothic OTF Bold';
    color: #000;
  }
`
const HeadIcon = styled.div`
  position: absolute;
  right: 4px;
  span{
    cursor: pointer;
  }
`
const ClickBlind = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  z-index: 99999;
  opacity: 0.5;
`
const MenuTabBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p:nth-child(2){
    padding-bottom: 28px;
    border-bottom: 1px solid rgb(242, 242, 242);
  }
  p:nth-child(3){
    padding-top: 28px;
  }
  p:nth-child(4){
    padding-bottom: 28px;
    border-bottom: 1px solid rgb(242, 242, 242);
  }
  p:nth-child(5){
    padding-top: 28px;
  }
  p:nth-child(6){
    padding-bottom: 28px;
    border-bottom: 1px solid rgb(242, 242, 242);
  }
  p:nth-child(7){
    padding-top: 28px;
  }
  p:nth-child(9){
    padding-bottom: 28px;
    border-bottom: 1px solid rgb(242, 242, 242);
  }
  p:nth-child(10){
    padding-top: 28px;
    padding-bottom: 32px;
  }
`
const MenuTab = styled.p`
  width: 100%;
  font-size: 1.2rem;
  padding: 18px 0;
  cursor: pointer;
`
const LogOut = styled.span`
  color: #000;
  font-size: 1.15rem;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
`