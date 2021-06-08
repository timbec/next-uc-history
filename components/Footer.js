import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
