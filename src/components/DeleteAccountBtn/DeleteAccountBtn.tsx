/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

// hooks
import { useDeleteAccount } from "@/hooks/useDeleteAccount";

const DeleteAccountBtn = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleDeleteAccount = async () => {
    setLoading(true);

    const response = await useDeleteAccount(session);

    if (response.ok) {
      signOut();
      setLoading(false);
    }
  };

  return (
    <div>
      {session ? (
        <div
          onClick={handleDeleteAccount}
          className={loading ? "pointer-events-none" : "cursor-pointer"}
        >
          {loading ? "Loading..." : "Delete Account"}
        </div>
      ) : (
        <Link href="/pages/login">Login</Link>
      )}
    </div>
  );
};

export default DeleteAccountBtn;
