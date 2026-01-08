"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButtons = () => {
  const session = useSession();

  if (session.status === "loading") {
    return <div className="skeleton h-8 w-20"></div>;
  }

  if (session.status === "authenticated") {
    return (
      <button onClick={() => signOut()} className="btn btn-primary">
        লগ আউট
      </button>
    );
  }

  return (
    <>
      <Link href="/login">
        <button className="btn btn-primary btn-outline">লগইন</button>
      </Link>
      <Link href="/register">
        <button className="btn btn-primary">রেজিস্টার</button>
      </Link>
    </>
  );
};

export default AuthButtons;
