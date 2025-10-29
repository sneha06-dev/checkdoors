import db from "@/lib/db";

export async function GET() {
  const [rows] = await db.query('SELECT * FROM banner');
  return Response.json(rows);
}
export async function POST(request) {
  const { banner_title, banner_main_title, banner_subtitle, banner_btn } = await request.json();

  await db.query(
    'INSERT INTO banner (banner_title, banner_main_title, banner_subtitle, banner_btn) VALUES (?, ?, ?, ?)',
    [banner_title, banner_main_title, banner_subtitle, banner_btn]
  );

  return Response.json({ message: 'banner created successfully' });
}
