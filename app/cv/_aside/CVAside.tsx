import Link from "next/link";
import CVAsideBox from "./CVAsideBox";

function CVAside() {
  return (
    <aside className="col-start-2 col-end-3 row-start-1 row-end-3 ml-4 flex flex-col border-l border-white/20 pl-6">
      <CVAsideBox icon="ic:round-language" h3="LANGUAGES">
        <ul className="flex flex-col gap-2">
          <li>Georgian: Native</li>
          <li>English: C1</li>
        </ul>
      </CVAsideBox>
      <CVAsideBox icon="f7:book" h3="EDUCATION">
        <ul className="flex flex-col gap-2">
          <li>
            <span className="font-medium text-white">BTU: </span>
            Bachelors degree of Information Technology <br />
            2023-2027
          </li>
          <li>
            <span className="font-medium text-white">UDEMY: </span>
            Responsive Real-World Websites with HTML and CSS from Jonas
            Schmedtmann
            <br />
            2024
          </li>
          <li>
            <span className="font-medium text-white">UDEMY: </span>The Complete
            JavaScript Course from Jonas Schmedtmann
            <br />
            2024
          </li>
          <li>
            <span className="font-medium text-white">UDEMY: </span>The Ultimate
            React Course from Jonas Schmedtmann
            <br />
            2024
          </li>
        </ul>
      </CVAsideBox>
      <CVAsideBox icon="f7:book" h3="MORE INFO">
        <ul className="flex flex-col gap-2">
          <li>
            <span className="font-medium text-white">GitHub: </span>
            <Link
              href="https://github.com/Giorgi-Gamgebeli"
              target="_blank"
              className="hover:underline"
            >
              github.com/Giorgi-Gamgebeli
            </Link>
          </li>
        </ul>
      </CVAsideBox>
    </aside>
  );
}

export default CVAside;
