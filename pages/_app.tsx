import type { AppContext, AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'components/Layout/Layout';
import { NextRouter } from 'next/dist/client/router';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
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
