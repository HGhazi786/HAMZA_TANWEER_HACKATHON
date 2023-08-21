import { NextRequest, NextResponse } from "next/server";
import { db, feedbackTable } from "@/app/lib/drizzle";
export const POST = async (request: NextRequest) => {

  const req = await request.json();
  try {
    const res = await db
      .insert(feedbackTable)
      .values({
        name:req.name,
        email:req.email,
        comment:req.comment
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};