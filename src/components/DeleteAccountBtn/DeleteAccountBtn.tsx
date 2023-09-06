/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

// lib
import { deleteAccount } from "@/lib/deleteAccount";

// hooks
import { useDeleteAccount } from "@/hooks/useDeleteAccount";

const DeleteAccountBtn = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {session ? (
        <div
          onClick={() => deleteAccount(session, setLoading)}
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
