import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
  const { shorturl } = await params
const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection('urls')
  const exdb = await collection.findOne({ shorturl : shorturl })
  console.log(exdb);
  if (exdb) {
    redirect(`${exdb.url}`) 

  }

else{
    redirect('/')
  
  }
  return <div>My Post: {shorturl}</div>
}