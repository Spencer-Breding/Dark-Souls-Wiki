import Head from "next/head";
import "../styles/styles.css";
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}