import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { reservationId, amount, packageName } = await request.json();

    if (!reservationId || !amount) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify reservation exists
    const reservation = await prisma.reservation.findUnique({
      where: { id: reservationId },
    });

    if (!reservation) {
      return NextResponse.json(
        { success: false, message: "Reservation not found" },
        { status: 404 }
      );
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: packageName || "Reserva Jaguar Llaqta",
              description: `Reserva para ${reservation.participants} persona(s)`,
            },
            unit_amount: Math.round(amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/es/reservas/confirmacion?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/es/reservas?cancelled=true`,
      metadata: {
        reservationId: reservationId,
      },
      customer_email: reservation.email,
    });

    // Update reservation with session ID
    await prisma.reservation.update({
      where: { id: reservationId },
      data: {
        paymentId: session.id,
        amount: amount,
      },
    });

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error("Stripe session error:", error);
    return NextResponse.json(
      { success: false, message: "Error creating payment session" },
      { status: 500 }
    );
  }
}
