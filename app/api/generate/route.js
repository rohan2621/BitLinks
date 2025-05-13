import clientPromise from "@/lib/mongodb"

export async function GET(request) {
return Response.json({ message: "Hello from the API" })
}

export async function POST(request) {
    const body = await request.json()
  const client = await clientPromise
  const db = client.db("bitlinks")
  const collection = db.collection('urls')
  const exdb = await collection.findOne({ shorturl : body.shorturl })
  if (exdb) {
    return Response.json({error: true,success:false, message: "URL already exists" })
  }
    const result = await collection.insertOne({
        url : body.url,
        shorturl : body.shorturl, 
    })

  return Response.json( {error: false,success:true, message : "URL shortened successfully"} )
}