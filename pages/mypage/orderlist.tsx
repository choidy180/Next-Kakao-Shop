import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Empty from "../../components/Empty";
import MypageTab from "../../components/MypageTab";
import Nav from "../../components/Nav";

const Orderlist: NextPage = () => {
  let nonContent = {
    image: "ico_empty_ryan.png",
    text: `아직 주문 내역이 없어요`,
    button: false,
    buttonText: ""
  }
  return (
    <Container>
      <Nav/>
      <Box>
        <MypageTab/>
        <Empty {...nonContent}/>
      </Box>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  background-color: #fff;
  box-sizing: border-box;
`
const Box = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export default Orderlist;
