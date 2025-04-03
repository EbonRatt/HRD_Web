import SideBar from "@/app/todopage/_components/SideBar";
import NavbarComponent from "./_components/NavbarComponent";
import MainContent from "./_components/MainContent";

export default function todoPage() {
  return (
    <section className="container flex min-w-full min-h-full gap-5 ">
      <SideBar />
      <main className="flex flex-col w-full p-6 gap-3">
        <NavbarComponent />
        <hr className="text-gray-400 border-2 rounded-2xl mb-5" />
        <MainContent />
      </main>
    </section>
  );
}
