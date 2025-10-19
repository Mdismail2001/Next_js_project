export async function GET() {
    const data = {
        message : "Hello from items API",
        error : false,
        status : 200
    }
  return Response.json({ data })
}


export async function POST(request) {
    const reqBody = await request.json();
    const data = {
        message : "Item created successfully",
        error : false,
        status : 201,
        item : reqBody
    }
  return Response.json({ data })
}