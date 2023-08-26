/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push("/");
  }, [session]);

  return (
    <div className="pt-[10rem]">
      <button onClick={() => signIn("google")}>Google Login</button>
      <button onClick={() => signIn("github")}>Github Login</button>
    </div>
  );
};

export default Login;
