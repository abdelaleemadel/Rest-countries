import { Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { cookies } from "next/headers";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});
export const metadata = {
  title: {
    template: "%s | RestCountries",
    default: "RestCountries | Explore Countries of the world",
  },
  description:
    "A modern web app to explore countries by name, region, and more. Built with Next.js and styled for a seamless user experience. Data sourced from the REST Countries API.",
};
/* ${nunitoSans.className} ${geistMono.variable} */
export default async function RootLayout({ children }) {
  let theme = "dark";
  try {
    const cookiesStore = await cookies();
    const themeCookie = cookiesStore.get("theme");
    theme = themeCookie?.value ?? "dark";
  } catch (error) {
    console.error("Failed to read cookies in RootLayout", error);
  }

  return (
    <html lang="en" className={theme}>
      <body
        className={`${nunitoSans.className} ${geistMono.variable} antialiased relative min-h-dvh bg-background dark:bg-very-dark`}
      >
        <ErrorBoundary fallback={<Error />}>
          <Header />
          <div className="pt-25">{children}</div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
