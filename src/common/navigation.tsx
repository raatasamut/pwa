import HomeSvg from '@svg/HomeSvg';
import PageASvg from '@svg/PageASvg';
import PageBSvg from '@svg/PageBSvg';


const bottomNavigation: shu.BottomNavigation = [
  {
    id: 1,
    label: 'Home',
    href: '/',
    icon: <HomeSvg className="w-6 h-6" />,
  },
  {
    id: 2,
    label: 'Page A',
    href: '/pagea',
    icon: <PageASvg />,
  },
  {
    id: 3,
    label: 'Page B',
    href: '/pageb',
    icon: <PageBSvg />,
  },
];

const navBar: shu.Navbar = [
  { id: 1, label: 'STORE', href: 'https://shu.global', external: true },
  { id: 2, label: 'Page A', href: '/pagea', external: false },
  { id: 3, label: 'Page B', href: '/pageb', external: false },
];

export { bottomNavigation, navBar };
