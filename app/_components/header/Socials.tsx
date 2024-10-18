import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

function Socials({ phoneSocials }: { phoneSocials?: boolean }) {
  return (
    <ul
      className={`${phoneSocials ? "flex flex-col gap-10 text-4xl" : "hidden gap-5 text-xl md:flex"}`}
    >
      <li>
        <Link
          target="_blank"
          aria-label="LinkedIn profile"
          href="https://www.linkedin.com/in/giorgi-gamgebeli-734b38298/"
          className={`transition hover:scale-110 ${phoneSocials ? "rounded-full bg-gray-100 p-2 dark:bg-[#0b122cab]" : ""}`}
        >
          <Icon icon={"hugeicons:linkedin-01"} />
        </Link>
      </li>

      <li>
        <Link
          target="_blank"
          aria-label="Github profile"
          href="https://github.com/CodingReaper1"
          className={`transition hover:scale-110 ${phoneSocials ? "rounded-full bg-gray-100 p-2 dark:bg-[#0b122cab]" : ""}`}
        >
          <Icon icon={"hugeicons:github"} />
        </Link>
      </li>
    </ul>
  );
}

export default Socials;
