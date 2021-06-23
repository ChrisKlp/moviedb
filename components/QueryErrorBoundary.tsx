import { Button, Text, VStack } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryErrorResetBoundary } from 'react-query';

const QueryErrorBoundary: React.FC = ({ children }) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <VStack h={40} spacing={6} align="center" justify="center">
            <Text>There was an error!</Text>
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </VStack>
        )}
      >
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export default QueryErrorBoundary;
