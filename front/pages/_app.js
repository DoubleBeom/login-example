import Nav from '../components/nav';
import '../styles/globals.css';

import wrapper from '../store/configureStore';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
