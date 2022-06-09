import styled from "styled-components";
import { ChevronBackOutline, HomeOutline, MenuOutline, Moon, SearchOutline } from "react-ionicons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function MypageTab({}){
  const path = useRouter().pathname;
  return (
    <ListTab>
      <Tab>
        <Link href={"/mypage/seen"}>
          {path.includes("seen") ? 
            <FocusTabText>최근 본</FocusTabText> 
            : <TabText>최근 본</TabText>
          }
        </Link>
      </Tab>
      <Tab>
        <Link href={"/mypage/act"}>
          {path.includes("act") ? 
            <FocusTabText>내 활동</FocusTabText> 
            : <TabText>내 활동</TabText>
          }
        </Link>
      </Tab>
      <Tab>
        <Link href={"/mypage/basket"}>
          {path.includes("basket") ? 
            <FocusTabText>장바구니</FocusTabText> 
            : <TabText>장바구니</TabText>
          }
        </Link>
      </Tab>
      <Tab>
        <Link href={"/mypage/orderlist"}>
          {path.includes("orderlist") ? 
            <FocusTabText>주문내역</FocusTabText> 
            : <TabText>주문내역</TabText>
          }
        </Link>
      </Tab>
    </ListTab>
  )
}
const ListTab = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9fa;
`
const Tab = styled.div`
  width: 100%;
  padding: 13px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TabText = styled.span`
  font-size: 1.1rem;
  cursor: pointer;
  font-family: 'NEXON Lv1 Gothic OTF';
`
const FocusTabText = styled.span`
  font-size: 1.1rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
`