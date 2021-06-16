import { CinemaIcon, PeopleIcon, TvIcon } from 'components/Icons';
import { GoSearch } from 'react-icons/go';

export default [
  {
    id: 1,
    name: 'Search',
    href: '/search',
    icon: GoSearch,
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
