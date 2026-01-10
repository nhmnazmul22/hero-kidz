import { registerUser } from "@/actions/server/auth";
import RegisterForm from "@/components/Form/RegisterForm";
import Link from "next/link";
import { Suspense } from "react";

const RegisterPage = () => {
  const handleRegister = async (data) => {
    "use server";
    const result = await registerUser(data);
    return result;
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">রেজিস্টার করুন</h2>
          <p className="text-center text-sm text-base-content/70">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </p>
          <Suspense fallback={null}>
            <RegisterForm handleRegister={handleRegister} />
          </Suspense>
          <p className="text-center text-sm mt-4">
            আগে থেকেই অ্যাকাউন্ট আছে?{" "}
            <Link href="/login" className="link link-primary">
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
