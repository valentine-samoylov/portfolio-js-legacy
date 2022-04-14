// Download CV
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@hooks/useNav'
import ButtonLink from '@components/Button/ButtonLink'
import Container from '@components/Container/Container'
import IconDownload from '@assets/images/svg/download.svg'

const buttonProps = {
  type: 'primary',
  variant: 'centered',
  href: 'https://drive.google.com/uc?id=11gdTeugEQrxj56uDZ_g45hxbUIziW1cf&export=download',
}

const Download = () => {
  const downloadRef = useNav('Download')

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.from('#downloadHeading', {
      scrollTrigger: {
        trigger: '#downloadHeading',
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
    <section className="section" id="downloadSection" ref={downloadRef}>
      <Container>
        <h3 className="section__heading" id="downloadHeading">
          Download CV
        </h3>
        <ButtonLink download {...buttonProps}>
          <IconDownload />
          Download
        </ButtonLink>
      </Container>
    </section>
  )
}

export default Download
