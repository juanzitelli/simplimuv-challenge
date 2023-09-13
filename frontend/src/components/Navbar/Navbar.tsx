import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <span className={styles.title}>(🏍️) SM</span>
      </Link>
      <ul className={styles.navItems}>
        <li>
          <Link href="/products?page=1&pageSize=5&type=bike">
            <span>Bikes</span>
          </Link>
        </li>
        <li>
          <Link href="/products?page=1&pageSize=5&type=accessory">
            <span>Accessories</span>
          </Link>
        </li>
        <li>
          <Link href="/products?page=1&pageSize=5&type=all">
            <span>Apparel</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
