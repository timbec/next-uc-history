import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Uranium City History | Helping keep Uranium City Alive on the web",
  description: "Stories and news from Uranium City",
  keywords: "Uranium City, Saskatchewan, Saskatchewan history"
};
