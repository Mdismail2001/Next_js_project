export async function GET(req, { params }) {
  const p = params;
  console.log("Params in GET item by id:", p);
  return Response.json({ message: `GET item with id ${p.id}` });
}


export async function DELETE(req, { params }) {
  const p = params;
  console.log("Params in GET item by id:", p);
  return Response.json({ message: `GET item with id ${p.id}` });
}


export async function POST(req, { params }) {
  const p = params;
  console.log("Params in GET item by id:", p);
  return Response.json({ message: `GET item with id ${p.id}` });
}


export async function PATCH(req, { params }) {
  const p = params;
  console.log("Params in GET item by id:", p);
  return Response.json({ message: `GET item with id ${p.id}` });
}
