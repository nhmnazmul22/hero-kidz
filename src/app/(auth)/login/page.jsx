import GoogleAuthButton from "@/components/Buttons/GoogleAuthButton";
import LoginForm from "@/components/Form/LoginForm";
import Link from "next/link";
import React from "react";

const LoginPage = async ({ searchParams }) => {
  const params = await searchParams;

  const registerLink = params?.callBackUrl
    ? `/register?callbackUrl=${params?.callBackUrl}`
    : "/register";
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">লগইন করুন</h2>
          <p className="text-center text-sm text-base-content/70">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>
          <LoginForm />
          <GoogleAuthButton />
          <p className="text-center text-sm mt-4">
            নতুন ব্যবহারকারী?{" "}
            <Link href={registerLink} className="link link-primary">
              রেজিস্টার করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
