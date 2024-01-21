import { Providers } from "./providers";

export const metadata = {
  title: "Dsyner | Diseño gráfico online",
  description: "Dsyner es un estudio de diseño gráfico en línea que utiliza IA para optimizar la entrega de sus servicios conservando la calidad y el proposito.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
