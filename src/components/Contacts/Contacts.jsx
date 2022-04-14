// Contacts
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@hooks/useNav'
import './Contacts.scss'
import Social from '@components/Social/Social'
import ButtonLink from '@components/Button/ButtonLink'
import { contactsData } from './contactsData'

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
      <div className="container">
        <h3 className="section__heading" id="contactsHeading">
          Get in touch
        </h3>
        <div className="contacts__inner">
          <h4 className="section__subheading">
            Feel free to contact me in any of the following ways:
          </h4>
          <ul className="contacts__list">
            {contactsData.map((contact, idx) => (
              <li className="contacts__item" key={idx}>
                <ButtonLink type="tertiary" href={contact.href}>
                  {contact.icon}
                  {contact.text}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </div>
        <Social />
      </div>
    </section>
  )
}

export default Contacts
