import React from "react";
import { Button } from "../button/Button";

type User = {
  name: string;
};

export interface NavBarProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const NavBar = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: NavBarProps) => (
  <header>
    <div className="flex items-center gap-8 px-4 py-5">
      <div className="flex flex-col items-center">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1 className="text-lg dark:text-white">Acme</h1>
      </div>
      <div className="w-full">
        {user ? (
          <div className="flex items-center justify-between">
            {/* snipped for brevity */}
            <span className="mr-3 text-lg dark:text-white">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </div>
        ) : (
          <div className="flex items-center justify-end gap-4">
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </div>
        )}
      </div>
    </div>
  </header>
);
