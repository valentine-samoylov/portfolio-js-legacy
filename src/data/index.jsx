// Data
import previewLuxuryHotels from '@/assets/images/content/preview-luxury-hotels.jpg?as=webp'
import previewMountain from '@/assets/images/content/preview-mountain.jpg?as=webp'
import previewPorten from '@/assets/images/content/preview-porten.jpg?as=webp'
import previewKrypto from '@/assets/images/content/preview-krypto.jpg?as=webp'
import IconPug from '@/assets/images/svg/pug.svg'
import IconSASS from '@/assets/images/svg/sass.svg'
import IconJS from '@/assets/images/svg/js.svg'
import IconTS from '@/assets/images/svg/ts.svg'
import IconReact from '@/assets/images/svg/react.svg'
import IconAxios from '@/assets/images/svg/axios.svg'
import IconTailwind from '@/assets/images/svg/tailwindcss.svg'
import IconPhone from '@/assets/images/svg/phone.svg'
import IconMail from '@/assets/images/svg/mail.svg'
import IconGitHub from '@/assets/images/svg/github.svg'
import IconLinkedIn from '@/assets/images/svg/linkedin.svg'
import IconSkype from '@/assets/images/svg/skype.svg'
import IconTelegram from '@/assets/images/svg/telegram.svg'
import IconInstagram from '@/assets/images/svg/instagram.svg'

// navLinks
export const navLinks = [
  { navLinkId: 'Hero', targetId: 'heroSection', linkText: 'Home' },
  { navLinkId: 'About', targetId: 'aboutSection', linkText: 'About me' },
  { navLinkId: 'Skills', targetId: 'skillsSection', linkText: 'Skills' },
  { navLinkId: 'Works', targetId: 'worksSection', linkText: 'My works' },
  { navLinkId: 'Download', targetId: 'downloadSection', linkText: 'Download CV' },
  { navLinkId: 'Contacts', targetId: 'contactsSection', linkText: 'Get in touch' },
]

// heroData
export const heroData = {
  firstName: 'Valentine',
  lastName: 'Samoylov',
  position: 'Front-end developer',
  location: 'Odesa, Ukraine',
}

// aboutData
export const aboutData = [
  {
    paragraph:
      'My name is Valentine, I am a front-end developer from Odesa, Ukraine. I like to learn new technologies and improve my skills to create awesome web applications and web pages.',
  },
  {
    paragraph:
      'I am looking for a career in an IT company to be part of its team, to work on new, interesting projects and to grow professionally together,am looking for a job in an IT company to be a part of its team, work on new, interesting projects and grow professionally together.',
  },
  {
    paragraph:
      'If I were to describe myself in one sentence, it would be a versatile outgoing guy, an admirer of good music and movies, and a technology enthusiast.',
  },
]

// skillsData
export const skillsData = {
  mainSkills: [
    { name: 'JavaScript', icon: <IconJS />, progressed: '60%' },
    { name: 'TypeScript', icon: <IconTS />, progressed: '40%' },
    { name: 'React', icon: <IconReact />, progressed: '35%' },
  ],
  otherSkills:
    'Responsive and adaptive design, BEM, HTML, CSS, TailwindCSS, Bootstrap, Bulma, EJS, Pug (Jade), SASS/SCSS, PostCSS, React (React Hooks, React Context), Node.js, NPM, Yarn, Webpack, Gulp, Git, Postman, Figma, Adobe Photoshop, Atlassian Jira.',
}

// worksData
const tech = [
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
    stack: [tech[0], tech[1], tech[2]],
    hrefDemo: ' https://luxury-hotels.vercel.app/',
    hrefRepo: 'https://github.com/valentine-samoylov/luxury-hotels/',
  },
  {
    imgSrc: previewMountain,
    title: 'Mountain',
    text: 'Snowboard & ski school landing',
    stack: [tech[0], tech[1], tech[2]],
    hrefDemo: 'https://mountain-school.vercel.app/',
    hrefRepo: 'https://github.com/valentine-samoylov/mountain/',
  },
  {
    imgSrc: previewPorten,
    title: 'Porten',
    text: "Men's accessories shop",
    stack: [tech[0], tech[1], tech[2]],
    hrefDemo: 'https://porten-shop.vercel.app/',
    hrefRepo: 'https://github.com/valentine-samoylov/porten-shop/',
  },
  {
    imgSrc: previewKrypto,
    title: 'Krypto',
    text: 'Cryptocurrency page using CoinGecko API and Axios.',
    stack: [tech[3], tech[4], tech[5]],
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
