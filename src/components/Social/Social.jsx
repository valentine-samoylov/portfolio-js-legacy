// Social
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ButtonLink from '@components/Button/ButtonLink'
import './Social.scss'
import { socialData } from './socialData'

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
          <ButtonLink type="icon" href={socialLink.href} target="_blank" rel="noreferrer noopener">
            {socialLink.icon}
          </ButtonLink>
        </li>
      ))}
    </ul>
  )
}

export default Social
