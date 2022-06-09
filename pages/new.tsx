import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BagOutline, ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";
import styled from "styled-components";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";

const New: NextPage = () => {
  const container_Carousel:any = useRef();
  const [imageCount, setImageCount] = useState(10);
  const [nowX, setNowX] = useState(0);
  const clickLeftButton = () => {
    nowX !== 0 && setNowX((prop) => prop + (100 / imageCount));
  }
  const clickRightButton = () => {
    nowX !== -90 && setNowX((prop) => prop - (100 / imageCount));
  }
  useEffect(()=>{
    container_Carousel.current.style.transform=`translateX(${nowX}%)`;
  },[nowX]);
  let character = [
    {title: "라이언 춘식이와 플렉스", sub: "머니건 라이언&춘식이"},
    {title: "안으면 시원해", sub: "시원한 롱 필로우 수달 라이언"},
    {title: "시원한 여름나기", sub: "썸머 홈 패브릭"},
    {title: "킨토 텀블러", sub:"텀블러 더 보러 가기"},
    {title: "젤리 투명우산", sub:"우산 더 보러 가기"},
    {title: "어두운 밤도 환하게", sub:"죠르디 열기구 오브제 조명"},
    {title: "춘식이와 어디서든 든든하게", sub:"10000mAh 춘식이보조배터리"},
    {title: "페이스 형태 유리컵", sub:"홈카페 용품 더 보러 가기"},
    {title: "미리 준비하는 여름", sub: "무선 무드등 타프 선풍기 라이언&춘식이"},
    {title: "시원하고 부드러운 한 잔", sub: "라이언 크리미 맥주 거품기"}
  ]
  return (
    <Container>
      <Nav/>
      <Box>
        <BannerContainer>
          <BannerWrapper>
            <BannerBox count={imageCount} ref={container_Carousel}>
              {[1,2,3,4,5,6,7,8,9,10].map((_, i)=>(
                <BannerImage key={i}>
                  <Image

                    alt={String(i)}
                    src={`/images/banner/new/new_banner_${_}.png`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                  <BannerTextTitle>{character[i].title}</BannerTextTitle>
                  <BannerTextSub>{character[i].sub}</BannerTextSub>
                </BannerImage>
              ))}
            </BannerBox>
          </BannerWrapper>
          <ChevronBackOutline
            width={"16px"}
            height={"16px"}
            color={"#000"}
            cssClasses={"FeedLeftBtn"}
            onClick={clickLeftButton}
          />
          <ChevronForwardOutline
            width={"16px"}
            height={"16px"}
            color={"#000"}
            cssClasses={"FeedRightBtn"}
            onClick={clickRightButton}
          />
        </BannerContainer>
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
const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`
const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 55.555%;
  svg{
    position: absolute;
    top: 50%;
    transform: translateY(-75%);
    background-color: #fff;
    opacity: 0.6;
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
  }
`
const BannerBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.count * 100)+"%"};
  height: 100%;
  display: flex;
  transition: all 0.4s ease-in-out;
`
const BannerImage = styled.div`
  float: left;
  position: relative;
  width: 10%;
  height: 100%;
  overflow: hidden;
`
const BannerTextTitle = styled.p`
  position: absolute;
  bottom: 4rem;
  left: 3rem;
  font-size: 2.4rem;
  color: white;
  font-family: 'NEXON Lv1 Gothic OTF';
`
const BannerTextSub = styled.p`
  position: absolute;
  bottom: 2rem;
  left: 3rem;
  font-size: 1.4rem;
  color: white;
  font-family: 'NEXON Lv1 Gothic OTF';
`
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
export default New;
