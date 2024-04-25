import myDbConnection from "@/lib/myDbConnection";
import { getServerSession } from "next-auth";

export async function PUT(req) {
  await myDbConnection();
  try {
    const { name } = await req.json();
    const session = await getServerSession();
    console.log("session: ", session);
    return Response.json(true);
  } catch (error) {
    console.log("error in profile api: ", error);
  }
}
