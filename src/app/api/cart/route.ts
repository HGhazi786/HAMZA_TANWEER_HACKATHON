import { NextRequest,NextResponse } from "next/server"
import { db,cartTable } from "@/app/lib/drizzle";
import {v4 as uuid} from "uuid"
import { cookies } from "next/headers";


export const GET = async (req:NextRequest) => {
    try{
        const res= await db.select().from(cartTable)
        return NextResponse.json({res})
    }
    catch(error){
        console.log(error)
        return NextResponse.json({message:"Something went wrong"})
    };
    
}
export const POST = async (request: NextRequest) => {

    const uid=uuid();
    const setcookies = cookies()
    const user_id= cookies().get("user_id")?.value;
    if(!user_id)
    {
        setcookies.set("user_id", uid);
    }
    

    const req= await request.json()

    try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: 1,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};