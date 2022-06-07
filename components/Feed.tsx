import styled from "styled-components";
import { ChevronBackOutline, ChevronForwardOutline, MenuOutline, Moon, SearchOutline } from "react-ionicons";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface FeedProps {
  thumbnail? : string;
  name? : string;
  date? : string;
  uuid? : string;
}

export default function Feed({
  thumbnail,
  name,
  date,
  uuid,
}: FeedProps){
  const container_Carousel:any = useRef();
  const [nowX, setNowX] = useState(0);
  const clickLeftButton = () => {
    nowX !== -87.5 && setNowX((prop) => prop - 12.5);
  }
  const clickRightButton = () => {
    console.log(nowX);
    nowX !== 0 && setNowX((prop) => prop + 12.5);
  }
  const viewInfo=()=>{
    console.log(nowX !== 0);
    console.log(nowX);
  }
  useEffect(()=>{
    container_Carousel.current.style.transform=`translateX(${nowX}%)`
  },[nowX]);
  return (
    <Container>
      <Head>
        <HeadImage>
          <ThumbWrapper>
            <ThumbBox onClick={viewInfo}>
              <Image
                alt={name}
                src={`/images/thumb/${thumbnail}`}
                layout="fill"
                objectFit="cover"
              />
            </ThumbBox>
          </ThumbWrapper>
        </HeadImage>
        <HeadText>
          <FeedTitle>{name}</FeedTitle>
          <FeedData>{date}</FeedData>
        </HeadText>
      </Head>
      <ContentContainer>
        <ContentWrapper>
            <ContentBox ref={container_Carousel}>
              {[0,1,2,3,4,5,6,0].map((_ , i) =>(
                <ContentImage>
                  <Image
                    alt={String(i)}
                    src={`/images/feed/${uuid}/media_${_}.png`}
                    layout="fill"
                    objectFit="contain"
                  />
                </ContentImage>
              ))}
            </ContentBox> 
        </ContentWrapper>
        <ChevronBackOutline
          width={"30px"}
          height={"30px"}
          color={"#000"}
          cssClasses={"FeedLeftBtn"}
          onClick={clickLeftButton}
        />
        <ChevronForwardOutline
          width={"30px"}
          height={"30px"}
          color={"#000"}
          cssClasses={"FeedRightBtn"}
          onClick={clickRightButton}
        />
      </ContentContainer>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
`
const Head =styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 16px;
`
const HeadImage = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 6px;
`
const ThumbWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
`
const ThumbBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
`
const HeadText = styled.div`
  width: calc(100% - 46px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
`
const FeedTitle = styled.p`
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  font-size: 1.3rem;
  margin-top: 4px;
`
const FeedData = styled.p`
  color: #909092;
`
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`
const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 66.666%;
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
const ContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 800%;
  height: 100%;
  display: flex;
  transition: all 0.4s ease-in-out;
`
const ContentImage = styled.div`
  float: left;
  position: relative;
  width: 12.5%;
  height: 100%;
`