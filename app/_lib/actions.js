"use server";

import { cookies } from "next/headers";

export async function setCookies() {
  const cookieStore = await cookies();
  const prevTheme = cookieStore.get("theme");

  const theme = prevTheme?.value === "light" ? "dark" : "light";
  cookieStore.set("theme", theme);
  return theme;
}
