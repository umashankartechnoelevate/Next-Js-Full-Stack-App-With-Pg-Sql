import "./globals.css";
import UserContextProvider from "../context/userContext/UserContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
