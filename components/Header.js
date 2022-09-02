import Link from "next/link";
import Head from "next/head";
import styles  from '../styles/header.module.scss'
import Input from "./Input";

export default function Header() {
  return (
    <>
      <Head>
        <title>Comics</title>
      </Head>
      <nav className={styles.nav}>
        <ul>
          <Link  href="/">
            Home
          </Link>
          <Link  href="/about">
            About
          </Link>
          <Link  href="/search">
            Search
          </Link>
        </ul>
        <div>

        <Input/>
        </div>
      </nav>
    </>
  );
}
