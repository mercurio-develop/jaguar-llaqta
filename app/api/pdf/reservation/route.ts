import { createElement } from "react";
import { travelerSchema } from "@/features/reservas/schemas";
import { z } from "zod";

const requestSchema = z.object({
  travelers: z.array(travelerSchema),
  lang: z.enum(["es", "en"]).default("es"),
  packageName: z.string(),
  date: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { travelers, lang, packageName, date } = requestSchema.parse(body);

    const [{ renderToBuffer }, { default: TravelerPDF }] = await Promise.all([
      import("@react-pdf/renderer"),
      import("@/features/reservas/pdf/TravelerPDF"),
    ]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buffer: Buffer = await renderToBuffer(createElement(TravelerPDF, { travelers, lang, packageName, date }) as any);

    const filename =
      lang === "es"
        ? "FORMULARIO JAGUAR LLAQTA (ES).pdf"
        : "FORMULARIO JAGUAR LLAQTA (ENG).pdf";

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return new Response(JSON.stringify({ error: "Error generating PDF" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
