import Link from "next/link";
import Head from "next/head";
import styles  from '../styles/header.module.scss'
import Input from "./Input";
import Buscador from "./Buscador";

export default function Header() {
  return (
    <>
      <Head>
        <title>Comics xkcd</title>
      </Head>
      <nav className={styles.nav}>
        <h3 style={{marginLeft:'5px'}}>xkcd</h3>
        <ul>
          <Link  href="/">
            Home
          </Link>
          <Link  href="/about">
            About
          </Link>
        </ul>
        <div>
        <Input/>
        <Buscador/>
        </div>
      </nav>
    </>
  );
}
