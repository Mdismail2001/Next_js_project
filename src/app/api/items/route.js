export async function GET() {
    const data = {
        message : "Hello from items API",
        error : false,
        status : 200
    }
  return Response.json({ data })
}