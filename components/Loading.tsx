import { Center, Spinner } from '@chakra-ui/react';

const Loading: React.FC = () => {
  return (
    <Center w="full" h={20}>
      <Spinner color="teal.300" />
    </Center>
  );
};

export default Loading;
