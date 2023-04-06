"use client";
import { Button } from "../components/button/Button";
import { useState } from "react";
import { NavBar } from "../components/nav_bar/NavBar";

type User = {
  name: string;
};

export default function Home() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [items, setItems] = useState<string[]>([]);

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
            <div className="rounded-md p-4 dark:bg-slate-700 dark:text-white">
              <h2 className="bold text-center text-lg">
                Logged in as {user.name}
              </h2>
              <div className="grid gap-2">
                {items.length == 0 && (
                  <p className="text-center italic">No items</p>
                )}
                {items.map((item, index) => (
                  <div key={item} className="flex gap-8">
                    <p>{item}</p>
                    <Button
                      label="Remove"
                      onClick={() => {
                        const newItems = [...items];
                        newItems.splice(index, 1);
                        setItems(newItems);
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-row-reverse gap-2">
                <Button
                  label="Add Item"
                  primary
                  onClick={() =>
                    setItems([
                      ...items,
                      `${new Date().toLocaleTimeString()}: Item #${new Date().getMilliseconds()}`,
                    ])
                  }
                />
                <Button label="Clear" onClick={() => setItems([])} />
              </div>
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
