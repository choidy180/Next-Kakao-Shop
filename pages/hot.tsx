import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Nav from "../components/Nav";

const Hot: NextPage = () => {
  return (
    <Container>
      <Nav/>
      <HotFeedContainer>
        <HotFeedBoxLeft>
          {[1,2,3].map((_, i)=>(
            <HotFeed>
              <Image
                src={`/images/hot/hot${_}.png`}
                layout="fill"
                objectFit="cover"
              />
            </HotFeed>
          ))}
        </HotFeedBoxLeft>
      </HotFeedContainer>
      <HotFeedContainer>
        <HotFeedBox>
          {[4,5,6,7,8,9].map((_,i)=>(
            <HotFeed>
              <Image
                src={`/images/hot/hot${_}.png`}
                layout="fill"
                objectFit="cover"
              />
            </HotFeed>
          ))}
        </HotFeedBox>
      </HotFeedContainer>
      <HotFeedContainer>
        <HotFeedBoxRight>
          {[1,2,3].map((_, i)=>(
            <HotFeed>
              <Image
                src={`/images/hot/hot${_}.png`}
                layout="fill"
                objectFit="cover"
              />
            </HotFeed>
          ))}
        </HotFeedBoxRight>
      </HotFeedContainer>
      <HotFeedContainer>
        <HotFeedBox>
          {[4,5,6,7,8,9].map((_,i)=>(
            <HotFeed>
              <Image
                src={`/images/hot/hot${_}.png`}
                layout="fill"
                objectFit="cover"
              />
            </HotFeed>
          ))}
        </HotFeedBox>
      </HotFeedContainer>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  padding-bottom: 20px;
`
const HotFeedContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 66.66666%;
`
const HotFeedBoxLeft = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  column-gap: 2px;
  row-gap: 2px;
  margin-bottom: 2px;
  div:nth-child(1){
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  div:nth-child(2){
    grid-column-start: 3;
    grid-column-end: 3;
  }
  div:nth-child(3){
    grid-row-start: 2;
    grid-row-end: 3;  
  }
`
const HotFeedBox = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  column-gap: 2px;
  row-gap: 2px;
  margin-bottom: 2px;
`
const HotFeedBoxRight = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 50% 50%;
  column-gap: 2px;
  row-gap: 2px;
  margin-bottom: 2px;
  div:nth-child(1){
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  div:nth-child(2){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  div:nth-child(3){
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`

const HotFeed = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export default Hot;
