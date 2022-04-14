// About
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@hooks/useNav'
import './About.scss'
import Container from '@components/Container/Container'
import ownerPhoto from '@assets/images/content/owner-photo.jpg?as=webp'

const About = () => {
  const aboutRef = useNav('About')

  const paragraphs = [
    {
      text: `My name is Valentine, I am a front-end developer from Odesa, Ukraine. My main interests are web development and creation of modern web sites.`,
    },
    {
      text: `I studied web development at Colt Steele's "Web Developer Bootcamp" and continue to refine my knowledge and skills.`,
    },
    {
      text: `I am looking forward to the opportunity to work on new interesting projects and meet new people.`,
    },
  ]

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('#aboutSection', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'bottom 30%',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    gsap.from('#aboutHeading', {
      scrollTrigger: {
        trigger: '#aboutHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap.from('#aboutImg', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      scale: 0,
      opacity: 0,
    })

    gsap.from('.about__col', {
      scrollTrigger: {
        trigger: '#aboutSection',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section className="about section" id="aboutSection" ref={aboutRef}>
      <Container>
        <h3 className="section__heading" id="aboutHeading">
          About me
        </h3>
        <div className="about__inner d-f ai-c">
          <picture className="about__imgWrapper" id="aboutImg">
            <img
              className="about__img"
              src={ownerPhoto}
              alt="Photo of Valentine Samoylov"
              loading="lazy"
            />
          </picture>

          <div className="about__col">
            {paragraphs.map((paragraph, idx) => (
              <p className="about__text section__text" key={idx}>
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About