import SideBar from "@/components/SideBar";
import DashBoard from "@/Pages/DashBoard";

export default function Home() {
  return (
    <>
      <section className="main">
        <DashBoard />
        <div className="contentMain flex">
          <div className="sideBarWrapper w-[18%]">
            <SideBar />
          </div>
        </div>
      </section>
    </>
  );
}
