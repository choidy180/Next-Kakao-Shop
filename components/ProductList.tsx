import styled from "styled-components";
import { BagOutline } from "react-ionicons";
import Image from "next/image";

export default function ProductList({}){
  return (
    <Theme>
      <ThemeCategory>추천 신규 테마</ThemeCategory>
      <ThemeTitle>소형 전자</ThemeTitle>
      <ContentList>
        {[0,1,2,3,4,5,6,7,8,9].map((_, i)=> (
          <LinkProduct key={i}>
            <ProductWrapper>
              <Image
                src={"/images/product/minigun.png"}
                layout="fill"
                objectFit="cover"
                quality={100}
              />
            </ProductWrapper>
            <ProductBox>
              <p>미니건 라이언&춘식이</p>
              <p>19,900원</p>
              <BagOutline
                width={"22px"}
                height={"22px"}
                color={"#000"}
              />
            </ProductBox>
          </LinkProduct>
        ))}
      </ContentList>
    </Theme>
  )
}
const Theme = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 49px 30px 0 30px;
  border-top: 12px solid rgb(235, 235, 235);
  box-sizing: border-box;
`
const ThemeCategory = styled.div`
  padding-left: 12px;
  color: rgb(154, 154, 158);
  font-size: 1.4rem;
`
const ThemeTitle = styled.div`
  padding-left: 12px;
  color: #000;
  font-size: 2.4rem;
  margin-top: 8px;
  font-family: 'NEXON Lv2 Gothic Bold';
`
const ContentList = styled.div`
  width: 100%;
  height: auto;
  padding: 8px 10px 0 10px;
  box-sizing: border-box;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
`
const LinkProduct = styled.div`
  position: relative;
  box-sizing: border-box;
  width: calc(50% - 5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const ProductWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  cursor: pointer;
  border-radius: 8px;
`
const ProductBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 10px 20px 10px 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  p:first-child{
    font-size: 1.4rem;
    color: rgb(119, 119, 119);
  }
  p:nth-child(2){
    font-size: 1.4rem;
    color: #000;
    font-family: 'NEXON Lv1 Gothic OTF';
    font-weight: 700;
    letter-spacing: -.6px;
  }
  svg{
    position: absolute;
    top: 10px;
    right: 8px;
  }
`