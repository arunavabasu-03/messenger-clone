import { unstable_getServerSession } from "next-auth";
import Header from "./Header";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  return (
    <html>
      <head />
      <body>
        <Header />
         {children}
      </body>
    </html>
  );
}
