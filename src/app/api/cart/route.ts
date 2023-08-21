import { NextRequest,NextResponse } from "next/server"
import { db,cartTable } from "@/app/lib/drizzle";
//import {v4 as uuid} from "uuid"
//import { cookies } from "next/headers";
import {eq, and} from "drizzle-orm"
import { auth } from "@clerk/nextjs";
import { timeStamp } from "console";

export const GET = async () => {
  const {userId}  = auth();

  if (!userId) {
    return NextResponse.json({ message: "Invalid User ID" });
  }
  try {
    const res = await db
      .select()
      .from(cartTable)
      .where(eq(cartTable.user_id, userId));
    const Items = res.map((item) => ({
      _id: item.product_id,
      price: item.price,
      total_price: item.total_price,
      image: item.image,
      name: item.product_name,
      quantity: item.quantity,
      date: `${item.created_at?.getDate()}-${item.created_at?.getMonth()}-${item.created_at?.getFullYear()}`,
      time: `${item.created_at?.getHours()}:${item.created_at?.getMinutes()}:${item.created_at?.getSeconds()}`,
      orderStatus:item.orderStatus
    }));
    return NextResponse.json(Items);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: (error as { message: string }).message,
    });
  }
};

export const POST = async (request: NextRequest) => {

    //set user id with cookies
    // const uid=uuid();
    // const setcookies = cookies()
    // const user_id= cookies().get("user_id")?.value;
    // if(!user_id)
    // {
    //     setcookies.set("user_id", uid);
    // }
    const {userId}= auth()
    const user_id = String(userId) 

    const req= await request.json()

    try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: req.quantity,
        user_id:user_id,        //cookies().get("user_id")?.value as string,
        product_name:req.product_name,
        total_price:req.total_price,
        price:req.price,
        image:req.image,
        orderStatus:"In cart"
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
export const PUT = async (request: NextRequest) => {
      const { userId } = auth();
      const user_id = String(userId);

  const req = await request.json();

  try {
    const res = await db.update(cartTable).set({quantity:req.quantity}).where(and(eq(
        cartTable.product_id, req.product_id),
        eq(cartTable.user_id,user_id
      ))).returning();

    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
