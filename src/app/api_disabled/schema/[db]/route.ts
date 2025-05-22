import { NextResponse } from "next/server";
import { readSchemaFile } from "@/utils/fileUtils";

export const dynamic = "force-static";

export async function GET(
  request: Request,
  context: { params: { db: string } }
) {
  try {
    const { db: dbName } = context.params;
    const data = readSchemaFile(dbName);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get schema" },
      { status: 500 }
    );
  }
}
