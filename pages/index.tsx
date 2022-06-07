import type { NextPage } from "next";
import styled from "styled-components";
import Feed from "../components/Feed";
import Nav from "../components/Nav";

const Home: NextPage = () => {
  let ryan = {
    thumbnail: "RYAN.png",
    name: "라이언",
    date: "7시간 전",
    uuid: "6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b",
  }
  return (
    <Container>
      <Nav/>
      <Box>
        <Feed 
          {...ryan}
        />
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
  box-sizing: border-box;
`
export default Home;
