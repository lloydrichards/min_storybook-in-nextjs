"use client";
import { Button } from "../components/button/Button";
import { useState } from "react";
import { NavBar } from "../components/nav_bar/NavBar";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";

type User = {
  name: string;
};

export default function Home() {
  const [user, setUser] = useState<User | undefined>(undefined);

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main>
      <NavBar
        user={user}
        onLogin={() => setUser({ name: "Jane Doe" })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: "Jane Doe" })}
      />

      <article className="flex min-h-[50vh] flex-col gap-4 rounded-md p-4 dark:bg-slate-800 dark:text-white">
        <section className="rounded-md p-4 dark:bg-slate-700 dark:text-white">
          <h2 className="text-lg">Pages in Storybook</h2>
          <p>
            Welcome to the Storybook oin NextJS testing repo. This is a UI
            development environment for your UI components. Here you can use
            storybook to develop components interactively, document them, and
            test them.
          </p>
        </section>
        <section>
          {user ? (
            <div className="mx-auto max-w-xl py-8">
              <h1 className="mb-8 text-center text-2xl font-black">
                Next.js + Contentlayer Example
              </h1>
              {posts.map((post, idx) => (
                <PostCard key={idx} {...post} />
              ))}
            </div>
          ) : (
            <div className="grid gap-8 rounded-md p-8 dark:bg-orange-800 dark:text-white">
              <h2 className="text-center text-lg italic">Not logged in</h2>
              <p className="text-center italic">
                Please login or sign up to see the content of this page.
              </p>
            </div>
          )}
        </section>
      </article>
    </main>
  );
}

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}
