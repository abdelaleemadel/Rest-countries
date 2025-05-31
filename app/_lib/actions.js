"use server";

import { cookies } from "next/headers";

export async function getCookies() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  return theme?.value;
}
