import Nav from '../components/nav';
import '../styles/globals.css';

import { QueryClient, QueryClientProvider } from 'react-query';

const qeuryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* TODO: 리액트 쿼리를 쓰기 위한 필수 */}
      <QueryClientProvider client={qeuryClient}>
        <Nav />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
