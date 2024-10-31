"use client";

import Button from "./_components/Button";

type ErrorTypes = {
  error: Error;
  reset: () => void;
};

function Error({ error, reset }: ErrorTypes) {
  console.error("Error: ", error);
  return (
    <main className="mx-auto flex h-screen max-w-[30rem] flex-col justify-center gap-10">
      <Button type="button" onClick={reset}>
        Go back
      </Button>
      <p>Oops unexpected error happend: {error.message}</p>
    </main>
  );
}

export default Error;
