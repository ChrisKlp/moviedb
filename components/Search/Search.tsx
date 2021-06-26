import {
  Box,
  Container,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Center,
  Button,
  Grid,
} from '@chakra-ui/react';
import fetcher from 'lib/fetcher';
import { debounce } from 'lodash';
import Link from 'next/link';
import React, { useCallback, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { TMovieItem } from 'types/movieTypes';
import { TSinglePerson } from 'types/personTypes';
import { TTvItem } from 'types/tvTypes';
import SearchCard from './SearchCard';

type SearchProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const [value, setValue] = useState('');
  const initialRef = useRef<HTMLInputElement>(null);

  const { isLoading, data, refetch } = useQuery(
    'search',
    () => fetcher(`/search/multi?query=${value}`),
    {
      enabled: false,
    }
  );
  const debounceRefetch = useCallback(debounce(refetch, 600), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounceRefetch();
  };

  return (
    <Modal
      isOpen={isOpen}
      size="full"
      onClose={onClose}
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent bg="gray.900" m={0} rounded={0}>
        <ModalCloseButton />
        <ModalBody p={0} m={0}>
          <Container mt={[20, null, 40]}>
            <Box>
              <Input
                type="text"
                variant="flushed"
                placeholder="Search"
                fontSize={['xl', null, '5xl']}
                fontWeight="light"
                h={[12, null, 20]}
                onChange={handleChange}
                mb={12}
                ref={initialRef}
              />
            </Box>
            {!isLoading && !!data?.results?.length && (
              <>
                <Grid
                  templateColumns="repeat( auto-fill, minmax(160px, 1fr))"
                  justifyContent="start"
                  gap={5}
                  mb={12}
                >
                  {data.results
                    .slice(0, 8)
                    .map((item: TMovieItem & TTvItem & TSinglePerson) => (
                      <Link
                        href={`/${item.media_type}/${item.id}`}
                        key={item.id}
                      >
                        <a onClick={onClose}>
                          <SearchCard data={item} />
                        </a>
                      </Link>
                    ))}
                </Grid>
                <Center py={6}>
                  <Link href={`/search/${value}`} passHref>
                    <Button as="a" colorScheme="teal" onClick={onClose}>
                      Load More
                    </Button>
                  </Link>
                </Center>
              </>
            )}
          </Container>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Search;
