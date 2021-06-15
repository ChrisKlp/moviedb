import { Box } from '@chakra-ui/react';

type HeroProps = {};

const bgImage =
  'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces_filter(duotone,032541,01b4e4)/nlCHUWjY9XWbuEUQauCBgnY8ymF.jpg';

const Hero: React.FC<HeroProps> = () => {
  return (
    <Box bgImage={`url('${bgImage}')`} bgSize="cover" p={12} h="110vh">
      sdfsd
    </Box>
  );
};

export default Hero;
