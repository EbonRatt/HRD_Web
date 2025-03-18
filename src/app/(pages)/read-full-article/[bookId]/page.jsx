import { getBookById } from "@/Service/BookService";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReadFullArticlePage = async ({ params: ParamsPromise }) => {
  const { bookId } = await ParamsPromise;
  const bookById = await getBookById(bookId);
  return (
    <section className="px-[10%] pt-[5%] w-full h-screen flex flex-col gap-10">
      <article className="flex gap-3 items-center text-darkBlue font-semibold ">
        <Link href={"/#"} className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          {/* Home Page */}
          Home
        </Link>
        <Link href={"/#"} className="flex gap-3">
          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          {/* Last Page */}
          Book Categories
        </Link>
        <Link href={"/#"} className="flex gap-3 text-darkRed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          {/* Current Page */}
          How Do You Live ?
        </Link>
      </article>
      {/* Body Card */}
      <article className="bg-whiteSmoke w-full h-full rounded-tl-4xl rounded-tr-4xl relative">
        <figure className=" absolute top-[-100px] right-50">
          <Image
            className="rounded-2xl"
            height={300}
            width={300}
            src={
              "https://mir-s3-cdn-cf.behance.net/project_modules/1400/583649164431305.63f68280e2b51.jpg"
            }
          ></Image>
        </figure>
        <div className="w-full mt-[15%]  p-[5%] flex flex-col gap-3">
          <h2 className="text-darkBlue font-bold text-2xl">How Do You Live?</h2>
          <h3 className="text-darkBlue flex items-center gap-2 font-bold">
            by
            <span className="text-darkGreen font-semibold text-xl">
              Black Monster
            </span>
          </h3>
          {/* Only For Cartoon */}
          <h3 className="flex items-center space-x-2 text-gray-500">
            <svg
              className="w-5 h-5 text-teal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>1200000 times</span>
            <span>|</span>
            <span>1940</span>
          </h3>
          <p className="text-darkBlue text-justify">
            "How Do You Live?" (君たちはどう生きるか, Kimitachi wa Dō Ikiru ka)
            by Genzaburō Yoshino is a philosophical coming-of-age novel set in
            pre-war Japan. It revolves around Junichi "Copper" Honda, a
            thoughtful 15-year-old boy, who is facing the complexities of
            adolescence, his family life, and the social realities around him.
            Copper's life changes after his father’s death, which forces him to
            grapple with the idea of responsibility, morality, and the value of
            individual actions. The novel takes a unique approach by blending a
            narrative with deep philosophical lessons. Copper’s Uncle, a major
            influence on him, writes long letters to him that contain valuable
            wisdom about how one should live life, focusing on themes like
            social justice, personal responsibility, and compassion. These
            letters are the central guide for Copper, offering him tools to
            navigate the world and think critically about what it means to be a
            good person. Throughout the story, Copper experiences several
            incidents that challenge his understanding of society. He confronts
            issues like bullying, classism, and how to deal with personal
            suffering. One important aspect of the novel is Copper's
            relationship with his peers and the way he learns to handle the
            complexities of friendships and social interactions. He also learns
            about the differences between the ideal self and the real self,
            discovering how to cope with imperfections and imperfections in
            others. Copper’s growth throughout the novel isn't just emotional
            but deeply intellectual. His uncle’s lessons on the
            interconnectedness of people, the importance of self-awareness, and
            contributing to the greater good shape Copper into a reflective and
            compassionate young man. By the end of the novel, Copper begins to
            develop a clearer understanding of how he should live his life,
            striving to be a person who lives not only for himself but also for
            others. The book isn’t just about a boy growing up; it’s a call to
            the readers to reflect on their own lives and the way they live in
            the world. It challenges its audience to think critically about
            their values and actions, making it timeless in its appeal. The
            story is particularly impactful for younger readers, as it offers
            them both a fictional narrative and practical lessons for life. In
            addition to its philosophical depth, "How Do You Live?" has
            influenced Japanese culture profoundly. The book has been celebrated
            for its positive moral teachings, and its themes are still relevant
            in contemporary conversations about ethical living. The novel has
            had a lasting impact on Japanese literature and has inspired
            filmmakers like Hayao Miyazaki, who used it as a primary inspiration
            for his 2023 animated film "The Boy and the Heron". The enduring
            appeal of "How Do You Live?" lies in its universal exploration of
            the human experience, making it a classic read for generations. 4o
            mini
          </p>
        </div>
      </article>
    </section>
  );
};

export default ReadFullArticlePage;
