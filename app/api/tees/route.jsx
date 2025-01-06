import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("shticker")

    const items = await db.collection("tees").find({}).toArray()

    return NextResponse.json(items)
    
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    )
  }
}
