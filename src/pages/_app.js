import "../styles/globals.css";
import "../styles/animate.css"
import '../styles/cb-slider.css';
import '../styles/et-line.css';
import '../styles/toastr.min.css';
import '../styles/jquery.fancybox.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'jquery/dist/jquery.min.js';
import Layout from "@/components/layout/layout";
import '../styles/scss/style.scss';
import Head from "next/head";
// import 'ionicons/css/ionicons.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.png" />
        <title>Pixaar - Creative App Landing Page & Product Showcase </title>
        <meta name="description" content="Pixaar is Creative App Landing Page & Product Showcase Landing Page"/>
      </Head>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}