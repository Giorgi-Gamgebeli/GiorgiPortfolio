import Link from "next/link";
import Button from "./_components/Button";

function NotFound() {
  return (
    <main className="mx-auto flex h-screen max-w-[30rem] flex-col justify-center gap-10">
      <Link href="/">
        <Button type="button">Go Back</Button>
      </Link>
      <h1>This page could not be found :(</h1>
    </main>
  );
}

export default NotFound;
