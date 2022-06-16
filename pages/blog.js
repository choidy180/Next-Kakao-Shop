import Image from 'next/image';
import { sql_query } from "../lib/db";
import styled from 'styled-components'

export default function Blog(props){
  const {posts} = props;
  console.log("123123123123");
  console.log(posts);
  return (
    <Container>
      <h1>Welcome to the blog page ...</h1>
      {
        posts.map((item, i) => (
          <Box key={i}>
            <h2>{item.user_email}</h2>
            <h2>{item.careteAt}</h2>
            <ImageBox>
              <Image
                src={`/images/feed/${item.idx}/${item.images}`}
                layout={"fill"}
                objectFit={"cover"}
              />
            </ImageBox>
          </Box>
        ))
      }
    </Container>
  )
}

export async function getStaticProps(context){
  try {
    const result = await sql_query(`
      SELECT * FROM feed
    `);
    let posts = JSON.parse(JSON.stringify(result))
    return {
      props: {posts}
    };
  } catch (e) {
    return {props: {posts: false}}
  }
}
const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
`
const Box = styled.div`
  width: auto;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`

const ImageBox = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`