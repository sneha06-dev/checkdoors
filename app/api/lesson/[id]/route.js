import db from "@/lib/db";
export async function PUT(req, { params }) {
  const { id } = params;
  const { banner_title, banner_main_title, banner_subtitle, banner_btn} = await req.json();
  await db.query('UPDATE banner SET banner_title=?, banner_main_title=?, banner_subtitle=?,  banner_btn=? WHERE id=?',
     [banner_title, banner_main_title, banner_subtitle, banner_btn,id]);
  return Response.json({ message: 'Updated successfully' });
}

export async function DELETE(req,{params}) {
    await db.query('DELETE FROM banner WHERE id=?',[params.id]);
     return Response.json({message:'deleted'})
};    