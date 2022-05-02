// Contacts
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Subheading from '@/components/Subheading'

import Social from '@/components/Social'
import Button from '@/components/Button'
import { contactsData } from '@/data'

const Contacts = () => {
  const contactRef = useNav('Contacts')

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('#contactsHeading', {
      scrollTrigger: {
        trigger: '#contactsHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap.from('.contacts__inner', {
      scrollTrigger: {
        trigger: '#contactsSection',
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
    <section className="contacts section ta-c" id="contactsSection" ref={contactRef}>
      <Container>
        <Heading id="contactsHeading">Get in touch</Heading>
        <div className="contacts__inner">
          <Subheading variant="centered">
            Feel free to contact me in any of the following ways:
          </Subheading>
          <ul className="contacts__list">
            {contactsData.map((contact, idx) => (
              <li className="contacts__item" key={idx}>
                <Button as="a" type="tertiary" href={contact.href}>
                  {contact.icon}
                  {contact.text}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Social />
      </Container>
    </section>
  )
}

export default Contacts
