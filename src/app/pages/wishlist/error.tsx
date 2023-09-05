"use client"; // Error components must be Client components

import ErrorComponent from "@/components/UI/ErrorComponent";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <ErrorComponent error={error} reset={reset} />
    </div>
  );
}
