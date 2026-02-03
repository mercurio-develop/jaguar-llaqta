import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject || null,
        message: data.message,
      },
    });

    // TODO: Send notification email to admin
    // await sendNotificationEmail(contact);

    // TODO: Send confirmation email to user
    // await sendContactConfirmation(data.email, data.name);

    return NextResponse.json(
      { success: true, contact: { id: contact.id } },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error("Contact error:", error);
    return NextResponse.json(
      { success: false, message: "Error sending message" },
      { status: 500 }
    );
  }
}
