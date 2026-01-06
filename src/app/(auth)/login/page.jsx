import Link from "next/link";
import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">লগইন করুন</h2>
          <p className="text-center text-sm text-base-content/70">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>

          <form action="">
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">ইমেইল</span>
              </label>
              <label className="input input-bordered flex items-center gap-2 w-full">
                <FaEnvelope className="text-base-content/60" />
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="grow"
                />
              </label>
            </div>

            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text">পাসওয়ার্ড</span>
              </label>
              <label className="input input-bordered flex items-center gap-2  w-full">
                <FaLock className="text-base-content/60" />
                <input
                  type="password"
                  placeholder="********"
                  className="grow"
                />
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">লগইন</button>
            </div>
          </form>

          <p className="text-center text-sm mt-4">
            নতুন ব্যবহারকারী?{" "}
            <Link href="/register" className="link link-primary">
              রেজিস্টার করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
