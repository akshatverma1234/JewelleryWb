import SideBar from "@/components/SideBar";
import DashBoard from "@/Pages/DashBoard";

export default function Home() {
  return (
    <>
      <section className="main">
        <div className="contentMain flex">
          <div className="sideBarWrapper w-[18%]">
            <SideBar />
          </div>
          <div className="contentRight py-4 px-5 w-[82%]">
            <DashBoard />
          </div>
        </div>
      </section>
    </>
  );
}
