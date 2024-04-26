"use client";
import clsx from "clsx";
import { useState } from "react";
import LoginForm from "@/app/ui/login-form";
import SignupForm from "@/app/ui/signup-form";


export default function Forms() {
  const [formState, setFormState] = useState("login");

  return (
    <>
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
        <span
          className={clsx(
            "px-4 py-2 mr-10 hover:bg-stone-500 rounded-md cursor-pointer transition",
            {
              "bg-stone-500": formState === "login",
              "bg-stone-400": !(formState === "login"),
            }
          )}
          onClick={() => setFormState("login")}
        >
          Login
        </span>
        <span
          className={clsx(
            "px-4 py-2 hover:bg-stone-500 rounded-md cursor-pointer transition",
            {
              "bg-stone-500": formState === "signup",
              "bg-stone-400": !(formState === "signup"),
            }
          )}
          onClick={() => setFormState("signup")}
        >
          Signup
        </span>
      </div>

      <div className={clsx({
        hidden: formState === 'signup'
      })}>
        <LoginForm />
      </div>
      <div className={clsx({
        hidden: formState === 'login'
      })}>
        <SignupForm />
      </div>
    </>
  );
}
