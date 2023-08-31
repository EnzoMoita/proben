import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventType, date, resource } = body;
    const { appointment, type } = resource;

    const stage = await prismadb.webhookEvent.create({
      data: {
        eventType: eventType,
        date: new Date(date),
        appointment: Number(appointment),
        type: type,
      },
    });

    return NextResponse.json(stage);
  } catch (error) {
    console.log("[STAGE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const stage = await prismadb.webhookEvent.findMany();

    return NextResponse.json(stage);
  } catch (error) {
    console.log("[STAGE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
