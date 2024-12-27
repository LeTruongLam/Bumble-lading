import React from "react";
import SignInForm from "@/components/templates/sign-in/sign-in-form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-[72px]">
      <h1 className="text-3xl font-semibold mb-9">
        Welcome back! Please sign in
      </h1>
      <SignInForm />
      <p className="text-sm text-gray-500 mt-4">
        Dont have an account?
        <Link className="hover:underline text-blue-500" href="/sign-up">
          Sign up for free
        </Link>
      </p>
    </div>
  );
}
