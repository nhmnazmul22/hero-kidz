import Link from "next/link";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">রেজিস্টার করুন</h2>
          <p className="text-center text-sm text-base-content/70">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </p>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">নাম</span>
            </label>
            <label className="input input-bordered flex items-center gap-2 w-full">
              <FaUser className="text-base-content/60" />
              <input type="text" placeholder="আপনার নাম" className="grow" />
            </label>
          </div>

          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text">ইমেইল</span>
            </label>
            <label className="input input-bordered flex items-center gap-2  w-full">
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
                placeholder="কমপক্ষে ৬ অক্ষর"
                className="grow"
              />
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary  w-full">রেজিস্টার</button>
          </div>

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
