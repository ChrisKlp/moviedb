import { ChakraProvider } from '@chakra-ui/react';
import { Layout, QueryErrorBoundary } from 'components';
import type { AppContext, AppProps } from 'next/app';
import { NextRouter } from 'next/dist/client/router';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import theme from 'styles/theme';
import 'swiper/swiper.min.css';
import 'styles/swiperScrollbar.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <Layout>
            <QueryErrorBoundary>
              <Component {...pageProps} />
            </QueryErrorBoundary>
          </Layout>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

MyApp.getInitialProps = async function ({ Component, ctx }: AppContext) {
  let pageProps = {} as Partial<NextRouter>;
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
