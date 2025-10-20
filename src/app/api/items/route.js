// src/app/api/items/route.js
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  const collection = await dbConnect("comments");
  const data = await collection.find({}).limit(10).toArray();
  return Response.json(data);
}

export async function POST(request) {
  const reqBody = await request.json();
  return Response.json({
    message: "Item created successfully",
    data: reqBody,
    status: 201,
  });
}
