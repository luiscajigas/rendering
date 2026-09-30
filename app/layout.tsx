import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Cielo Andino | Astronomía y observación del cielo",
    template: "%s | Cielo Andino",
  },
  description:
    "Explora constelaciones, encuentra lugares para observar estrellas en Colombia y consulta las condiciones del cielo.",
  keywords: [
    "astronomía en Colombia",
    "observación de estrellas",
    "lugares para ver estrellas",
    "constelaciones",
    "cielo nocturno andino",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="pb-8 text-center text-sm text-slate-500">
          Cielo Andino · Explora el cielo nocturno de Colombia
        </footer>
      </body>
    </html>
  );
}
