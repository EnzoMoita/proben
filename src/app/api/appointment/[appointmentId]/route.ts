import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  { params }: { params: { appointmentId: string } }
) {
  try {
    const body = await req.json();
    const { eventType, date, resource } = body;
    const { appointment, type } = resource;

    const stage = await prismadb.webhookEvent.updateMany({
      where: {
        id: Number(params.appointmentId),
      },
      data: {
        eventType: eventType,
        date: new Date(date),
        appointment: appointment,
        type: type,
      },
    });

    return NextResponse.json(stage);
  } catch (error) {
    console.log("[STORE_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { appointmentId: string } }
) {
  try {
    if (!params.appointmentId) {
      return new NextResponse("Stage id is required", { status: 400 });
    }

    const stage = await prismadb.webhookEvent.deleteMany({
      where: {
        id: Number(params.appointmentId),
      },
    });

    return NextResponse.json(stage);
  } catch (error) {
    console.log("[STORE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(
  req: Request,
  { params }: { params: { appointmentId: string } }
) {
  try {
    if (!params.appointmentId) {
      return new NextResponse("Stage id is required", { status: 400 });
    }

    const stage = await prismadb.webhookEvent.findUnique({
      where: {
        id: Number(params.appointmentId),
      },
    });

    return NextResponse.json(stage);
  } catch (error) {
    console.log("[STAGE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
