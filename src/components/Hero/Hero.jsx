// Hero
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@hooks/useNav'
import './Hero.scss'
import Container from '@components/Container/Container'
import ButtonLink from '../Button/ButtonLink'
import IconArrowRight from '@assets/images/svg/arrow-right-long.svg'
import bgImage from '@assets/images/bg/bg.png?as=webp'

const buttonProps = {
  type: 'primary',
  variant: 'reversed',
  href: '#aboutSection',
}

const Hero = () => {
  const heroRef = useNav('Hero')

  const handleClick = (e) => {
    e.preventDefault()
    const scrollTo = e.target.getAttribute('href')
    document.querySelector(scrollTo).scrollIntoView({ behavior: 'smooth' })
  }

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('#heroSection', {
      scrollTrigger: {
        trigger: '#heroSection',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section
      className="hero d-f ai-c ovl-07"
      id="heroSection"
      style={{ backgroundImage: `url(${bgImage})` }}
      ref={heroRef}
    >
      <Container>
        <div className="hero__inner">
          <h1 className="hero__title">
            <span className="hero__name">Valentine</span>
            <span className="hero__name">Samoylov</span>
          </h1>
          <h2 className="hero__subtitle">
            <span className="hero__details">Front-end developer</span>
            <span className="hero__details">Odesa, Ukraine</span>
          </h2>
          <ButtonLink {...buttonProps} onClick={handleClick}>
            <IconArrowRight />
            Find out more
          </ButtonLink>
        </div>
        <a className="hero__scrollIcon" href="#aboutSection" onClick={handleClick}></a>
      </Container>
    </section>
  )
}

export default Hero