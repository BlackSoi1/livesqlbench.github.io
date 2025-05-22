import { NextResponse } from "next/server";
import { readDataFile } from "@/utils/fileUtils";

export const dynamic = "force-static";

export async function GET(
  request: Request,
  context: { params: { db: string } }
) {
  try {
    const { db: dbName } = context.params;
    const data = readDataFile(dbName);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to get data" }, { status: 500 });
  }
}
