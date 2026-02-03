import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  package: z.string().min(1),
  date: z.string().min(1),
  participants: z.number().min(1).max(20),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = reservationSchema.parse(body);

    const reservation = await prisma.reservation.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        package: data.package,
        date: new Date(data.date),
        participants: data.participants,
        notes: data.notes || null,
        status: "pending",
      },
    });

    // TODO: Send confirmation email
    // await sendConfirmationEmail(reservation);

    return NextResponse.json(
      { success: true, reservation: { id: reservation.id } },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Reservation error:", error);
    return NextResponse.json(
      { success: false, message: "Error creating reservation" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email required" },
        { status: 400 }
      );
    }

    const reservations = await prisma.reservation.findMany({
      where: { email },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, reservations });
  } catch (error) {
    console.error("Get reservations error:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching reservations" },
      { status: 500 }
    );
  }
}
