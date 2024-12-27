import React from "react";
import Link from "next/link";
import SignUpForm from "@/components/templates/sign-up/sign-up-form";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-[72px]">
      <h1 className="text-3xl font-semibold mb-9">Hi there! Please sign up</h1>
      <SignUpForm />
      <p className="text-sm text-gray-500 mt-4">
        Already have an account?
        <Link className="hover:underline text-blue-500" href="/sign-in">
          Sign in
        </Link>
      </p>
    </div>
  );
}
