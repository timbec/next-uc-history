import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title="page not found">
      <div className={styles.error}>
        <h1>
          404 - the page you're looking for doesn't exist.
        </h1>
      </div>
      <Link href="/">Go Home</Link>
    </Layout>
  );
}
