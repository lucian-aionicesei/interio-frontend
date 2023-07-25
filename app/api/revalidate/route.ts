import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  if (tag !== null) {
    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } else {
    // Handle the case when 'tag' is null, depending on your requirements.
    // For example, you could return an error response or do something else.
    return NextResponse.json({ error: "Tag not provided." }, { status: 400 });
  }
}
