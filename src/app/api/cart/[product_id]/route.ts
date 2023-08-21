import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/app/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq, and } from "drizzle-orm";
import {useSearchParams} from "next/navigation"
import { auth } from "@clerk/nextjs";

export const DELETE = async (
  request: NextRequest,{params}:{params:{product_id:string}}
) => {
  const { userId } = auth();
  const user_id = String(userId);


  try {
    const cartItem = await db
      .delete(cartTable)
      .where(
        and(
          eq(cartTable.product_id, params.product_id),
          eq(cartTable.user_id,user_id)
        )
      );
    return NextResponse.json({ message: "Cart item deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
