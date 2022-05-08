// Social
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Link from '@/components/Link'

import './index.scss'
import { socialData } from '@/data'

const Social = () => {
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('.social__item', {
      scrollTrigger: {
        trigger: '.social',
        start: 'top bottom',
        end: 'top 88%',
        scrub: 1,
      },
      scale: 0,
      delay: 1,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <ul className="social d-f jc-c">
      {socialData.map((socialLink, idx) => (
        <li className="social__item" key={idx}>
          <Link type="icon" href={socialLink.href} target="_blank" rel="noreferrer noopener">
            {socialLink.icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Social
