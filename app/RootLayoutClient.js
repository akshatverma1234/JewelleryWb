"use client";
import { usePathname } from "next/navigation";
import { AppProvider, MyContext } from "@/context/AppContext";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { useContext } from "react";

function InnerLayout({ children }) {
  const pathname = usePathname();
  const context = useContext(MyContext);

  const hideLayoutRoutes = [
    "/login",
    "/signup",
    "/products/upload",
    "/forgot-password",
    "/verify-account",
    "/change-password",
  ];
  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  if (shouldHideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <section className="main">
        <div className="contentMain flex">
          <div
            className={`sidebarWrapper transition-all duration-400 ${
              context?.isOpenSideBar
                ? "w-[18%] opacity-100 pointer-events-auto"
                : "w-0 opacity-0 pointer-events-none"
            }`}
          >
            <SideBar />
          </div>
          <div
            className={`contentRight py-4 px-5 transition-all duration-400 ${
              context?.isOpenSideBar === false ? "w-[100%]" : "w-[82%]"
            }`}
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default function RootLayoutClient({ children }) {
  return (
    <AppProvider>
      <InnerLayout>{children}</InnerLayout>
    </AppProvider>
  );
}
