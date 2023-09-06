import { Session } from "next-auth";
import { signOut } from "next-auth/react";

export async function deleteAccount(
  session: Session | null,
  setLoading: (value: boolean) => void
) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(session),
  };

  const response = await fetch("/api/delete_account_api", requestOptions);

  if (response.ok) {
    signOut();
    setLoading(false);
  }
}
