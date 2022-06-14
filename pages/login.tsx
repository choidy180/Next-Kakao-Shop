import { NextPage } from "next"
import { useState } from "react";
import { LogoGithub, LogoGoogle } from "react-ionicons";
import styled from 'styled-components';
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { authService, dbService } from "../firebase/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";


const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: {name, value}
    } = event;
    if(name === "email"){
      setEmail(value);
    } else if (name === "password"){
      setPassword(value);
    }
  }
  const onSocialClick = async (event) => {
    const {
      currentTarget: {name},
    } = event;
    let provider;
    let result;
    const dataBase = collection(dbService, "Profile");
    if(name === "google"){
      provider = new GoogleAuthProvider();
      result = await signInWithPopup(authService, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
    }
    let getUserEmail = String(result?.user.reloadUserInfo.email);
    const usersCollectionRef = collection(dbService, "Profile");
    const q = await query(
      usersCollectionRef,
      where("email", "==",getUserEmail)
    );
    const getProfileData = await getDocs(q);
    const newData = getProfileData.docs.map(doc => ({...doc.data()}));
    if(newData[0]===undefined){
      await addDoc(dataBase, {
        email: result?.user.email,
        displayName: result?.user.displayName,
        photoUrl: result?.user.photoURL,
        createAt: Date.now(),
        updateAt: Date.now(),
      })
    } 
    router.push("/");
  }
  const toggleAccount = () => setNewAccount((prev) => !prev); 
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if(newAccount){
        // 회원가입
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        )
      } else {
        // 로그인
        data = await signInWithEmailAndPassword(
          authService,
          email,
          password
        )
      }
      await router.push("/");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <Container onSubmit={onSubmit}>
      <Title>KAKAO FRIENDS</Title>
      <Input
        name="email"
        type="text"
        placeholder="이메일"
        // required
        value={email}
        onChange={onChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="비밀번호"
        // required
        value={password}
        onChange={onChange}
      />
      <ErrorMessage>{error}</ErrorMessage>
      <Button type="submit">{newAccount ? "회원가입" : "로그인"}</Button>
      <ChangeType onClick={toggleAccount}>{newAccount ? "이미 가입된 아이디가 있으신가요?" : "회원가입 하러가기"}</ChangeType>
      <LogoBox>
        <Logo color={"#4285F4"} onClick={onSocialClick} name={"google"}>
          <LogoGoogle
            width={"26px"}
            height={"26px"}
            color={"#fff"}
            key={"google"}
          />
        </Logo>
        <Logo color={"#24292e"} onClick={onSocialClick} name={"github"}>
          <LogoGithub
            width={"26px"}
            height={"26px"}
            color={"#fff"}
            key={"github"}
          />
        </Logo>
      </LogoBox>
    </Container>
  )
}

const Container = styled.form`
  padding: 40px 20px;
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
const ErrorMessage = styled.p`
  margin-top: 4px;
  color: red;
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
const ChangeType = styled.p`
  font-size: 1rem;
  font-family: 'NEXON Lv1 Gothic OTF';
  cursor: pointer;
  margin-top: 6px;
  :hover {
    text-decoration: underline;
  }
`

const LogoBox = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  gap: 8px;
`
const Logo = styled.button`
  width: 100%;
  padding: 6px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  background-color: ${props => props.color};
`
export default Login;