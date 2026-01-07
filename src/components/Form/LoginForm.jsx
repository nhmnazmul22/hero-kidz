"use client";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const handleLoginSubmit = async (data) => {
    console.log(data);
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (!result.ok || !result.status === 401) {
      toast.error("Login failed, Wrong credentials provided.");
      return;
    }

    toast.success("Login successful");
  };

  return (
    <form action="" onSubmit={handleSubmit(handleLoginSubmit)}>
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
            {...register("email", { required: "দয়া করে আপনার ইমেইল লিখুন" })}
          />
        </label>
        {errors.email && (
          <p className="text-error text-sm mt-2">
            {errors.email.message || "দয়া করে আপনার ইমেইল লিখুন"}
          </p>
        )}
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
            {...register("password", { required: "দয়া করে পাসওয়ার্ড লিখুন" })}
          />
        </label>
        {errors.password && (
          <p className="text-error text-sm mt-2">
            {errors.password.message || "দয়া করে পাসওয়ার্ড লিখুন"}
          </p>
        )}
      </div>

      <div className="form-control mt-6">
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary w-full disabled:btn-disabled"
        >
          {isSubmitting ? "লগইন হচ্ছে..." : "লগইন"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
