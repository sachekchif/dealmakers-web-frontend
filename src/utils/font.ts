import { Poppins, Inter } from "next/font/google";

export const PoppinsFont = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-Poppins",
});
// export const InterFont = Inter({
//   weight: ["200", "400", "500", "700"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-Inter",
// });
