// Data

import previewLuxuryHotels from '@/assets/images/content/preview-luxury-hotels.jpg?as=webp'
import previewMountain from '@/assets/images/content/preview-mountain.jpg?as=webp'
import previewPorten from '@/assets/images/content/preview-porten.jpg?as=webp'
import previewKrypto from '@/assets/images/content/preview-krypto.jpg?as=webp'
import IconPug from '@/assets/images/svg/pug.svg'
import IconSASS from '@/assets/images/svg/sass.svg'
import IconJS from '@/assets/images/svg/js.svg'
import IconReact from '@/assets/images/svg/react.svg'
import IconAxios from '@/assets/images/svg/axios.svg'
import IconTailwind from '@/assets/images/svg/tailwindcss.svg'
import IconPhone from '@assets/images/svg/phone.svg'
import IconMail from '@assets/images/svg/mail.svg'
import IconGitHub from '@assets/images/svg/github.svg'
import IconLinkedIn from '@assets/images/svg/linkedin.svg'
import IconDjinni from '@assets/images/svg/djinni.svg'
import IconSkype from '@assets/images/svg/skype.svg'
import IconTelegram from '@assets/images/svg/telegram.svg'
import IconInstagram from '@assets/images/svg/instagram.svg'

// navLinks
export const navLinks = [
  { navLinkId: 'Hero', scrollToId: 'heroSection', linkText: 'Home' },
  { navLinkId: 'About', scrollToId: 'aboutSection', linkText: 'About me' },
  { navLinkId: 'Skills', scrollToId: 'skillsSection', linkText: 'Skills' },
  { navLinkId: 'Works', scrollToId: 'worksSection', linkText: 'My works' },
  { navLinkId: 'Download', scrollToId: 'downloadSection', linkText: 'Download CV' },
  { navLinkId: 'Contacts', scrollToId: 'contactsSection', linkText: 'Get in touch' },
]

// worksData
const techStack = [
  { icon: <IconPug />, text: 'Pug (Jade)' },
  { icon: <IconSASS />, text: 'SASS/SCSS' },
  { icon: <IconJS />, text: 'JS' },
  { icon: <IconReact />, text: 'React' },
  { icon: <IconAxios />, text: 'Axios' },
  { icon: <IconTailwind />, text: 'Tailwind CSS' },
]

export const worksData = [
  {
    imgSrc: previewLuxuryHotels,
    title: 'Luxury Hotels',
    text: 'Four-page hotel landing',
    stack: [techStack[0], techStack[1], techStack[2]],
    hrefDemo: ' https://luxury-hotels.vercel.app/',
    hrefRepo: 'https://github.com/valentine-samoylov/luxury-hotels/',
  },
  {
    imgSrc: previewMountain,
    title: 'Mountain',
    text: 'Snowboard & ski school landing',
    stack: [techStack[0], techStack[1], techStack[2]],
    hrefDemo: 'https://mountain-school.vercel.app/',
    hrefRepo: 'https://github.com/valentine-samoylov/mountain/',
  },
  {
    imgSrc: previewPorten,
    title: 'Porten',
    text: "Men's accessories shop",
    stack: [techStack[0], techStack[1], techStack[2]],
    hrefDemo: 'https://porten-shop.vercel.app/',
    hrefRepo: 'https://github.com/valentine-samoylov/porten-shop/',
  },
  {
    imgSrc: previewKrypto,
    title: 'Krypto',
    text: 'Cryptocurrency trading page',
    stack: [techStack[3], techStack[4], techStack[5]],
    hrefDemo: 'https://krypto-trading.vercel.app/',
    hrefRepo: 'https://github.com/valentine-samoylov/krypto-trading',
  },
].reverse()

// contactsData
export const contactsData = [
  {
    href: 'tel:+380931453354',
    icon: <IconPhone />,
    text: '+38 (093) 145 33 54',
  },
  {
    href: 'mailto:valentine.samoylov@gmail.com',
    icon: <IconMail />,
    text: 'valentine.samoylov@gmail.com',
  },
]

// socialData
export const socialData = [
  {
    href: 'https://github.com/valentine-samoylov',
    icon: <IconGitHub title="GitHub" />,
  },
  {
    href: 'https://www.linkedin.com/in/valentine-samoylov/',
    icon: <IconLinkedIn title="LinkedIn" />,
  },
  {
    href: 'https://djinni.co/q/b6b6809bf5/',
    icon: <IconDjinni title="Djinni" />,
  },
  {
    href: 'https://join.skype.com/invite/fjnLBWvnMhpk',
    icon: <IconSkype title="Skype" />,
  },
  {
    href: 'https://t.me/valentine_samoylov/',
    icon: <IconTelegram title="Telegram" />,
  },
  {
    href: 'https://www.instagram.com/valentine.samoylov/',
    icon: <IconInstagram title="Instagram" />,
  },
]