import Head from "next/head";
import "../styles/styles.css";
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}