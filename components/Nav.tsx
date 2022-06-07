import styled from "styled-components";
import { MenuOutline, Moon, SearchOutline } from "react-ionicons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Nav({}){
  let path = useRouter().pathname;
  return (
    <Container>
      <Top>
        <Left>
          <MenuOutline
            width="30px"
            height="30px"
            color="#000"
          />
        </Left>
        <Center>
          <Title>KAKAO FRIENDS</Title>
        </Center>
        <Right>
          <SearchOutline
            width="22px"
            height="22px"
            color="#000"
          />
          <Moon
            width="22px"
            height="22px"
            color="#000"
          />
        </Right>
      </Top>
      <Bottom>
        <Link href="/">
          {path === "/" ? <TabFocus>오늘</TabFocus> : <Tab>오늘</Tab>}
        </Link>
        <Link href="/new">
          {path === "/new" ? <TabFocus>신규</TabFocus> : <Tab>신규</Tab>}
        </Link>
        <Link href="/hot">
          {path === "/hot" ? <TabFocus>인기</TabFocus> : <Tab>인기</Tab>}
        </Link>
        <Link href="mypage">
          {path === "/mypage" ? <TabFocus>마이</TabFocus> : <Tab>마이</Tab>}
        </Link>
      </Bottom>
    </Container>  
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg{
      cursor: pointer;
    }
  }
`
const Top = styled.div`
  padding: 8px 16px;
  box-sizing: border-box;
`
const Left = styled.div`
  justify-content:flex-start;
`
const Center = styled.div`
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  justify-content: center;
`
const Right = styled.div`
  justify-content:flex-end;
  gap: 10px;
`
const Title = styled.span`
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  padding: 4px 12px;
  color: #fff;
  background-color: #000;
  border-radius: 5rem;
`
const Bottom = styled.div`
  width: 100%;
  margin-top: 4px;
  padding: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(227, 229, 232);
  gap: 4px;
`
const Tab = styled.div`
  width: 100%;
  padding: 10px 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 4px solid #fff;
  cursor: pointer;
`
const TabFocus = styled.div`
  width: 100%;
  padding: 10px 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  border-bottom: 4px solid #000;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`

