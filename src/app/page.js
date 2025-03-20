import CardImage from "@/components/MyUi/CardImage";
import Input from "@/components/MyUi/input";
import SideBarComponent from "@/components/MyUi/SideBarComponent";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex">
      <SideBarComponent />
      <section className=" w-full px-[5%] pt-[2%]">
        <section className="flex flex-col gap-5">
          <Input />
          <article className=" bg-whiteSmoke h-screen p-[5%] rounded-2xl w-full min-h-full ">
            {/* Title HomePage */}
            <figure className="flex flex-col">
              <span className="w-fit mb-5 px-6 py-2 bg-gray-200 text-darkGreen font-bold rounded-3xl">
                HomePage
              </span>
              <hr className="border-darkGreen"></hr>
            </figure>
            {/* Cards */}
            <div className="flex items-center justify-center gap-20 mt-20">
              {/* Card Books */}
              <CardImage
                image={"image.png"}
                text={"View All Available Books"}
                href={"/book-categories"}
              />
              {/* Card Cartoon */}
              <CardImage
                image={"image (1).png"}
                text={"View All Available Cartoons"}
                href={"/old-school-cartoons"}
              />
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
