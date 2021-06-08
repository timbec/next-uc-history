import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Uranium City History</h1>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/places">Places</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
