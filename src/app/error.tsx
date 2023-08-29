"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="main">
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
