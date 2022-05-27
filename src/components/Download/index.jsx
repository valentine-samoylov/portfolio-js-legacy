// Download CV
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Button from '@/components/Button'
import IconDownload from '@/assets/images/svg/download.svg'

const buttonProps = {
  as: 'link',
  type: 'primary',
  variant: 'centered',
  href: 'https://drive.google.com/uc?id=10s3usMhRhyWwhUrEZj5a7y_d82x0gR92&export=download',
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
        <Heading id="downloadHeading">Download CV</Heading>
        <Button download {...buttonProps}>
          <IconDownload />
          Download
        </Button>
      </Container>
    </section>
  )
}

export default Download
