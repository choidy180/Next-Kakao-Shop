import { NextPage } from "next"
import { LogoGithub, LogoGoogle } from "react-ionicons";
import styled from 'styled-components';

const Login: NextPage = () => {
  return (
    <Container>
      <Title>KAKAO FRIENDS</Title>
      <Input
        type="text"
        placeholder="이메일"
      />
      <Input
        type="password"
        placeholder="비밀번호"
      />
      <Button>로그인</Button>
      <LogoBox>
        <LogoGithub
          width={"32px"}
          height={"32px"}
          color={"#000"}
        />
        <LogoGoogle
          width={"32px"}
          height={"32px"}
          color={"#000"}
        />
      </LogoBox>
    </Container>
  )
}

const Container = styled.div`
  padding: 40px 20px;
  border: 1px solid red;
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  font-size: 2.2rem;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  padding-bottom: 55px;
`
const Input = styled.input`
  width: 100%;
  max-width: 300px;
  border: none;
  outline: none;
  border-bottom: 1.2px solid #808080;
  font-size: 1.4rem;
  padding: 6px 4px;
  margin-top: 12px;
  font-family: 'NEXON Lv1 Gothic OTF';
  :focus{
    border-bottom: 1.2px solid #808080;
  }
  box-sizing: border-box;
`

const Button = styled.button`
  width: 100%;
  max-width: 300px;
  border: none;
  outline: none;
  background-color: #d7d7d7;
  box-sizing: border-box;
  padding: 12px 0;
  margin-top: 28px;
  font-size: 1.4rem;
  border-radius: 8px;
`
const LogoBox = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  gap: 16px;
  svg {
    cursor: pointer;
  }
`
export default Login;