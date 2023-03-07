import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={"bg-slate-800"}>
      {/* build a sample page using tailwind and nextjs */}
      <div className={"container mx-auto"}>
        <div
          className={
            "flex flex-col items-center justify-center min-h-screen py-2 text-slate-200"
          }
        >
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          <h1 className={"text-6xl font-bold"}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={"mt-3 text-2xl"}>
            Get started by editing{" "}
            <code className={"p-3 font-mono text-lg bg-slate-600 rounded-md"}>
              pages/index.js
            </code>
          </p>

          <div
            className={
              "flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full"
            }
          >
            <a
              href="https://nextjs.org/docs"
              className={
                "p-6 mt-6 text-left border w-96 rounded-xl hover:text-slate-500 focus:text-slate-500"
              }
            >
              <h3 className={"text-2xl font-bold"}>Documentation &rarr;</h3>
              <p className={"mt-4 text-xl"}>
                Find in-depth information about Next.js features and API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className={
                "p-6 mt-6 text-left border w-96 rounded-xl hover:text-slate-500 focus:text-slate-500"
              }
            >
              <h3 className={"text-2xl font-bold"}>Learn &rarr;</h3>
              <p className={"mt-4 text-xl"}>
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
