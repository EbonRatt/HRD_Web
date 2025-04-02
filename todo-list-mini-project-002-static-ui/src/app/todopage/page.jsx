import SideBar from "@/app/todopage/_components/SideBar";
import NavbarComponent from "./_components/NavbarComponent";
import MainContent from "./_components/MainContent";

export default function todoPage() {
  return (
    <section className="container flex min-w-full  min-h-screen">
      <SideBar />
      <main className="flex flex-col bg-amber-300 w-full p-6">
        <NavbarComponent />
        <MainContent />
      </main>
    </section>
  );
}
