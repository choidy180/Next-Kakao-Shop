import type { NextPage } from "next";
import Image from "next/image";
import { SearchOutline } from "react-ionicons";
import styled from "styled-components";
import Nav from "../../components/Nav";

const Hot: NextPage = () => {
  let character = [
    {name: "Ryan", ko: "라이언"},
    {name: "Apeach", ko: "어피치"},
    {name: "Muzi", ko: "무지"},
    {name: "Frodo", ko: "프로도"},
    {name: "Neo", ko: "네오"},
    {name: "Tube", ko: "튜브"},
    {name: "Jayg", ko: "제이지"},
    {name: "Con", ko: "콘"},
    {name: "Chun-sik", ko: "춘식이"},
    {name: "Jordy", ko: "죠르디"},
    {name: "Scappy", ko: "스카피"},
    {name: "Angmond", ko: "앙몬드"},
    {name: "Pendajr", ko: "팬다주니어"},
    {name: "Kero&berony", ko: "케로&베로니"},
    {name: "Cob", ko: "콥"},
    {name: "Bbanya", ko: "빠냐"},
    {name: "Character-zone", ko: "캐릭터관"},
  ]
  return (
    <Container>
      <Nav/>
      <Box>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <SearchOutline
            width={"24px"}
            height={"24px"}
            color={"rgb(99, 110, 114)"}
          />
        </SearchBox>
        <ListCharacter>
          {character.map((_, i) => (
            <LinkCharacter key={i}>
              <CharacterWrapper>
                <CharacterBox character={`/images/character/character_${_.name}`}/>
              </CharacterWrapper>
              <CharacterTitle>{_.ko}</CharacterTitle>
            </LinkCharacter>
          ))}
        </ListCharacter>
        <CategoryBox>
          <CategoryTitle>카테고리</CategoryTitle>
          <CategoryKeywordBox>
            <span>전체</span>
            <span>토이</span>
            <span>리빙</span>
            <span>잡화</span>
            <span>문구</span>
            <span>의류</span>
            <span>디지털</span>
            <span>여행/레져</span>
            <span>식품</span>
            <span>테마 기획전</span>
          </CategoryKeywordBox>
        </CategoryBox>
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
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg{
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`
const SearchInput = styled.input`
  width: 100%;
  padding: 12px 40px;
  background-color: #f2f2f2;
  border: none;
  outline: none;
  font-size: 1.2rem;
  border-radius: 30px;
  font-family: 'NEXON Lv1 Gothic OTF';
`
const ListCharacter = styled.div`
  width: 100%;
  height: auto;
  padding: 8px 10px 0 10px;
  box-sizing: border-box;
  margin-top: 10px;
  border-top: 1px solid #dedfe0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`
const LinkCharacter = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
  width: calc(100% / 6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`
const CharacterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 100%;
  cursor: pointer;
`
const CharacterBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  color: ${(props)=>(props)};
  background-image: url(${props => props.character+".png"});
  background-size: contain;
  :hover{
    background-image: url(${props => props.character+"_color.png"});
  }
`
const CharacterTitle = styled.p`
  font-size: 1.1rem;
  margin-top: 8px;
  cursor: pointer;
`
const CategoryBox = styled.div`
  width: 100%;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  border-top: 1px solid #dedfe0;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`
const CategoryTitle = styled.p`
  font-family: 'NEXON Lv1 Gothic OTF';
  font-size: 1.66rem;
`
const CategoryKeywordBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
  span{
    font-size: 1.4rem;
    border: 1px solid #dedfe0;
    padding: 9px 11px 8px 11px;
    border-radius: 24px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    :hover{
      background-color: #dedfe0;
    }
  }
`
export default Hot;
