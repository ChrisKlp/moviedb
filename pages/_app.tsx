import { ChakraProvider } from '@chakra-ui/react';
import { Layout, QueryErrorBoundary } from 'components';
import type { AppContext, AppProps } from 'next/app';
import { NextRouter } from 'next/dist/client/router';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import theme from 'styles/theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Layout>
          <QueryErrorBoundary>
            <Component {...pageProps} />
          </QueryErrorBoundary>
        </Layout>
      </ChakraProvider>
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
