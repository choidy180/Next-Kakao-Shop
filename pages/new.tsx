import type { NextPage } from "next";
import styled from "styled-components";
import Nav from "../components/Nav";

const New: NextPage = () => {
  return (
    <Container>
      <Nav/>
      Next-New
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
export default New;
