import { SearchIcon } from '@chakra-ui/icons';
import { CinemaIcon, PeopleIcon, TvIcon } from 'components/Icons';

export default [
  {
    id: 1,
    name: 'Search',
    href: '/search',
    icon: SearchIcon,
  },
  {
    id: 2,
    name: 'Movies',
    href: '/movies',
    icon: CinemaIcon,
  },
  {
    id: 3,
    name: 'TV Series',
    href: '/tvseries',
    icon: TvIcon,
  },
  {
    id: 4,
    name: 'People',
    href: '/person',
    icon: PeopleIcon,
  },
];
