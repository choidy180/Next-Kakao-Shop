import styled from "styled-components";
import { ArrowUpCircleOutline, BagOutline, ChatbubbleOutline, ChevronBackOutline, ChevronForwardOutline, HeartOutline, PaperPlaneOutline} from "react-ionicons";
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
    nowX !== 0 && setNowX((prop) => prop + 12.5);
  }
  const clickRightButton = () => {
    console.log(nowX);
    nowX !== -87.5 && setNowX((prop) => prop - 12.5);
  }
  const viewInfo=()=>{
    console.log(nowX !== 0);
    console.log(nowX);
  }
  useEffect(()=>{
    container_Carousel.current.style.transform=`translateX(${nowX}%)`;
  },[nowX]);
  let datadata = {
    item:[{
      image: "ba9f1f65-ad55-4e3f-9e78-e98df87770bd.png",
      tit: "라이언페이스 캔쿨러",
      desc: "24,000원"
    },{
      image: "976e239e-82ba-48a0-93a8-c73ee6efb79b.png",
      tit: "시원한아이스머그_라이언",
      desc: "10,000원"
    },{
      image: "26e78336-988a-400a-b6f6-460a0de2a40e.png",
      tit: "시원한아이스머그_어피치",
      desc: "10,000원"
    }]
  }
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
                <ContentImage key={i}>
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
      </ContentContainer>
      <FeedInfo>
        <FeedActive>
          <LikeReply>
            <HeartOutline
              width={"30px"}
              height={"30px"}
              color={"#000"}
            />
            <ChatbubbleOutline
              width={"28px"}
              height={"28px"}
              color={"#000"}
            />
          </LikeReply>
          <Share>
            <PaperPlaneOutline
              width={"30px"}
              height={"30px"}
              color={"#000"}
            />
          </Share>
        </FeedActive>
      </FeedInfo>
      <LikeCount>좋아요 427명</LikeCount>
      <TitFeed><p>시원함을 오래오래 🧊<br/>프렌즈와 드링크 타임 🍹</p></TitFeed>
      <DescFeed><p>언제 어디서나 드링크를 시원하게 ❄️<br/>프렌즈와 쿨 썸머 파티 시-작! 🍻</p></DescFeed>
      <ProductList>
        {datadata.item.map((_, i) =>(
          <ProductContent key={i}>
            <ProductImage>
              <Image
                alt={"ba9f1f65-ad55-4e3f-9e78-e98df87770bd.png"}
                src={`/images/product/${_.image}`}
                layout="fill"
                objectFit="contain"
              />
            </ProductImage>
            <ProductText>
              <p>{_.tit}</p>
              <p>{_.desc}</p>
            </ProductText>
            <ProductBasket>
              <BagOutline
                width={"26px"}
                height={"26px"}
                color={"#000"}
              />
            </ProductBasket>
          </ProductContent>
        ))}
      </ProductList>
      <ReplyInputBox>
        <ReplyInput
          type="text"
          placeholder="로그인 후 이용해주세요."
          disabled
        />
        <ArrowUpCircleOutline
          width={"26px"}
          height={"26px"}
          color={"#808080"}
        />
      </ReplyInputBox>
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
  border-radius: 12px;
  overflow: hidden;
`
const FeedInfo = styled.div`
  width: 100%;
  padding-top: 8px;
  display: flex;
  flex-direction: column;
`
const FeedActive = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 4px;
  svg{
    cursor: pointer;
  }
`
const LikeReply = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`
const Share = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const LikeCount = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 6px;
  font-size: 1.2rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`
const TitFeed = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
  padding: 0 4px;
  box-sizing: border-box;
  p{
    font-size: 1.9rem;
    font-family: 'NEXON Lv1 Gothic OTF Bold';
  }
`
const DescFeed = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 12px;
  padding: 0 4px;
  box-sizing: border-box;
  p{
    font-size: 1.4rem;
    font-family: 'NEXON Lv2 Gothic';
  }
`
const ProductList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid #dedfe0;
  border-radius: 10px;
  margin-top: 12px;
  div:last-child{
    border-bottom: none;
  }

`
const ProductContent = styled.div`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dedfe0;
`
const ProductImage = styled.div`
  position: relative;
  flex: 0 0 70px;
  height: 70px;
  cursor: pointer;
`
const ProductText = styled.div`
  width: calc(100% - 110px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 6px;
  p{
    cursor: pointer;
  }
  p:first-child {
    color: #747475;
    font-size: 1.3rem;
    font-family: 'NEXON Lv1 Gothic OTF';
  }
  p:last-child {
    font-size: 1.3rem;
    font-family: 'NEXON Lv1 Gothic OTF';
    font-family: 'NEXON Lv1 Gothic OTF Bold';
  }
`
const ProductBasket = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  svg{
    cursor: pointer;
  }
`
const ReplyInputBox = styled.div`
  position: relative;
  width: 100%;
  padding: 0 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  svg{
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`
const ReplyInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  padding: 13px 64px 13px 22px;
  box-sizing: border-box;
  border-radius: 24px;
  font-size: 1.2rem;
  ::placeholder{
    color: #aeaeaf;
    font-family: 'NEXON Lv1 Gothic OTF';
  }
`