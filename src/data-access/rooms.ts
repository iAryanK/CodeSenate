import { db } from "@/db";

export async function getRooms() {
  const items = await db.query.room.findMany();
  return items;
}
