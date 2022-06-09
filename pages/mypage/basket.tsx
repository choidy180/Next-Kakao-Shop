import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Empty from "../../components/Empty";
import MypageTab from "../../components/MypageTab";
import Nav from "../../components/Nav";
import ProductList from "../../components/ProductList";

const Basket: NextPage = () => {
  let nonContent = {
    image: "ico_cart_empty.png",
    text: `아직 관심 상품이 없네요!`,
    button: true,
    buttonText: "인기 상품 보기"
  }
  return (
    <Container>
      <Nav/>
      <Box>
        <MypageTab/>
        <Empty {...nonContent}/>
        <ProductList/>
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
  justify-content: center;
  align-items: center;
`
export default Basket;
