import { getDatabase } from "@netlify/database";
import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context): Promise<Response> => {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "JSON inválido" }, 400);
  }

  const nombre = String(body.nombre ?? "").trim();
  if (!nombre) {
    return json({ error: "El campo nombre es requerido" }, 400);
  }

  const email   = String(body.email   ?? "").trim() || null;
  const telefono = String(body.telefono ?? "").trim() || null;
  const mensaje  = String(body.mensaje  ?? "").trim() || null;

  const db = getDatabase();

  try {
    await db.sql`
      INSERT INTO leads (nombre, email, telefono, mensaje)
      VALUES (${nombre}, ${email}, ${telefono}, ${mensaje})
    `;

    return json({ success: true, mensaje: "Lead registrado correctamente" }, 200);
  } catch (err) {
    console.error("[submit-lead] DB error:", err);
    return json({ error: "Error interno. Intente de nuevo." }, 500);
  }
};

export const config = {
  path: "/api/leads",
};

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
