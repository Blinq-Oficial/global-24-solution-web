import { getDatabase } from "@netlify/database";
import type { Context } from "@netlify/functions";

export default async (req: Request, _context: Context): Promise<Response> => {
  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // Protección con token de admin (configura ADMIN_SECRET en Netlify → Site Settings → Env Vars)
  const expectedToken = process.env.ADMIN_SECRET;
  const authHeader = req.headers.get("Authorization");

  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const db = getDatabase();

  try {
    const rows = await db.sql`
      SELECT id, nombre, email, telefono, mensaje, creado_en
      FROM leads
      ORDER BY creado_en DESC
    `;

    return json({ leads: rows, total: rows.length }, 200);
  } catch (err) {
    console.error("[get-leads] DB error:", err);
    return json({ error: "Error interno" }, 500);
  }
};

export const config = {
  path: "/api/admin/leads",
};

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
