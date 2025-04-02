import { Provider } from "@/context/provider";
import SideBar from "@/components/SideBar";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Monster",
    default: "Todo List | Monster",
  },
  description: "Homework 006 - Next.js",
};

export default function AuthenticationLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-charcoal">
        <div className="container flex bg-amber-300  min-w-full min-h-screen">
          <SideBar />
          <Provider>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
