import Layout from "../layouts/Layout";
import "../public/css/normalize.css";
import "../public/css/global.scss";
// import "../public/css/variable.scss";
import 'antd/dist/antd.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
