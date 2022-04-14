// worksData
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
