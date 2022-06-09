import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Empty(props){
  return (
    <CartEmptyContainer>
      <CartEmptyWrapper>
        <CartEmptyBox>
          <Image
            src={`/images/mypage/${props.image}`}
            layout="fill"
            objectFit="contain"
          />
        </CartEmptyBox>
      </CartEmptyWrapper>
      <CartEmptyText>{props.text}</CartEmptyText>
      {props.button && <CartEmptyButton>{props.buttonText}</CartEmptyButton>}
    </CartEmptyContainer>
  )
}
const CartEmptyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30% 0;
`
const CartEmptyWrapper = styled.div`
  position: relative;
  width: 30%;
  height: 0;
  overflow: hidden;
  padding-bottom: 30%;
`
const CartEmptyBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const CartEmptyText = styled.p`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #aeaeaf;
  text-align: center;
  margin-top: 4px;
`
const CartEmptyButton = styled.button`
  padding: 8px 16px;
  border: .1px solid #3c404b;
  background-color: #3c404b;
  color: #fff;
  margin-top: 12px;
  font-size: 1.6rem;
  border-radius: 12px;
`