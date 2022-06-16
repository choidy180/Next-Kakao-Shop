import mysql from 'serverless-mysql';

const db = mysql({
  config: {
    host: "localhost",
    user: "root",
    password: "00000000",
    database: "mydb",
  }
})

export async function sql_query(query_string, values = []){
  try {
    const results = await db.query(query_string, values);
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}