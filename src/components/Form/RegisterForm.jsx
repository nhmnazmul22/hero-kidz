"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegisterForm = ({ handleRegister }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  const handleRegisterSubmit = async (data) => {
    const result = await handleRegister(data);
    if (result.success) {
      toast.success(result.message || "Registration successful");
      reset();
      router.push("/login");
    } else {
      toast.error(result.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegisterSubmit)}>
      <div className="form-control mt-4">
        <label className="label">
          <span className="label-text">নাম</span>
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser className="text-base-content/60" />
          <input
            type="text"
            placeholder="আপনার নাম"
            className="grow"
            {...register("fullName", { required: "দয়া করে আপনার নাম লিখুন" })}
          />
        </label>
        {errors.fullName && (
          <p className="text-error text-sm mt-2">
            {errors.fullName.message || "দয়া করে আপনার নাম লিখুন"}
          </p>
        )}
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
            placeholder="কমপক্ষে ৬ অক্ষর"
            className="grow"
            {...register("password", {
              required: "দয়া করে পাসওয়ার্ড লিখুন",
              minLength: {
                value: 6,
                message: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষর হবে ।",
              },
              maxLength: {
                value: 16,
                message: "পাসওয়ার্ড সর্বোচ্চ ১৬ অক্ষর হবে ।",
              },
            })}
          />
        </label>
        {errors.password && (
          <p className="text-error text-sm mt-2">
            {errors.password.message || "দয়া করে পাসওয়ার্ড লিখুন"}
          </p>
        )}
      </div>

      <div className="form-control mt-6">
        <button type="submit" className="btn btn-primary w-full">
          {isSubmitting ? "রেজিস্টার হচ্ছে..." : "রেজিস্টার"}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
