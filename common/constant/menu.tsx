import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon
} from 'react-icons/bs';

import { IMenu } from '../interface/menu.interface';

const iconSize = 20;

export const SOCIAL_MEDIA: IMenu[] = [
  {
    title: 'Github',
    href: 'https://github.com/anwarhuda',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/anwar-huda-3a5273146/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/warrr_xcvii',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
  }
];
