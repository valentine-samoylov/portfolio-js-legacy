// Works
import { useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@hooks/useNav'
import './Works.scss'
import { worksData } from './worksData'
import Container from '@components/Container/Container'
import Heading from '@components/Heading/Heading'
import Card from '@components/Card/Card'
import Button from '@components/Button/Button'
import IconPlus from '@assets/images/svg/plus.svg'
import IconMinus from '@assets/images/svg/minus.svg'

const buttonProps = {
  type: 'primary',
  variant: 'centered',
}

const Works = () => {
  const worksRef = useNav('Works')
  const [itemsToShow, setItemsToShow] = useState(3)

  const showMore = () => {
    setItemsToShow(worksData.length)
  }

  const showLess = () => {
    setItemsToShow(3)
  }

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('#worksHeading', {
      scrollTrigger: {
        trigger: '#worksHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap.from('.card', {
      scrollTrigger: {
        trigger: '#worksSection',
        start: 'top bottom',
        end: 'top 40%',
        scrub: 1,
      },
      scale: 0,
    })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section className="works section" id="worksSection" ref={worksRef}>
      <Container>
        <Heading id="worksHeading">My works</Heading>
        <div className="works__content d-g">
          <div className="works__items d-g">
            {worksData.slice(0, itemsToShow).map((workItem, idx) => (
              <Card data={workItem} key={idx} />
            ))}
          </div>
        </div>
        {itemsToShow === 3 ? (
          <Button {...buttonProps} onClick={showMore}>
            <IconPlus />
            Show more
          </Button>
        ) : (
          <Button {...buttonProps} onClick={showLess}>
            <IconMinus />
            Show less
          </Button>
        )}
      </Container>
    </section>
  )
}

export default Works
