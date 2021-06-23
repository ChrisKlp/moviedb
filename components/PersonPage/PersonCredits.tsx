import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import { TPersonCast } from 'types/castTypes';
import CreditList from './CreditList';

type PersonCreditsProps = {
  movies: TPersonCast[];
  tvShows: TPersonCast[];
};

const PersonCredits: React.FC<PersonCreditsProps> = ({ movies, tvShows }) => {
  return (
    <Box>
      <Heading
        as="h4"
        fontSize="xl"
        fontWeight="semibold"
        color="teal.300"
        mb={6}
      >
        Acting
      </Heading>
      <Tabs colorScheme="teal">
        <TabList mb={4}>
          <Tab>Movies</Tab>
          <Tab>Tv</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <CreditList data={movies} />
          </TabPanel>
          <TabPanel px={0}>
            <CreditList data={tvShows} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default PersonCredits;
