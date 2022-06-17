import type { NextPage } from "next";
import styled from "styled-components";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import { sql_query } from "../lib/db";

const Home: NextPage = (props) => {
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
          {...ryan} {...props}
        />
      </Box>
    </Container>
  )
}
export async function getStaticProps(context){
  try {
    const get_Feed = await sql_query(`
      SELECT * FROM feed order by createAt ASC limit 1
    `)
    const get_FeedI_mage = await sql_query(`
      select * from feed_image 
      where Feed_idx in (
      select * from (
          SELECT idx FROM feed order by createAt ASC limit 1
        ) as tmp
      )
    `);
    const get_Feed_like = await sql_query(`
      select * from Feed_like
      where Feed_idx in (
      select * from (
          SELECT idx FROM feed order by createAt ASC limit 1
        ) as tmp
      )
    `)
    let feed = JSON.parse(JSON.stringify(get_Feed));
    let images = JSON.parse(JSON.stringify(get_FeedI_mage));
    let count = JSON.parse(JSON.stringify(get_Feed_like));
    return {
      props: {feed, images, count}
    };
  } catch (e) {
    return {props: {feed: false, images: false, count: false}}
  }
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
