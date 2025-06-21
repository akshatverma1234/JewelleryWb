"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { AppProvider } from "../context/AppContext";

export default function RootLayoutClient({ children }) {
  const pathname = usePathname();
  const hideHeaderRoutes = ["/login", "/signup"];
  const shouldHideHeader = hideHeaderRoutes.includes(pathname);

  return (
    <AppProvider>
      {!shouldHideHeader && <Header />}
      {children}
    </AppProvider>
  );
}
