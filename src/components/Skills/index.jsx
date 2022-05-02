// Skills
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useNav } from '@/hooks/useNav'
import './index.scss'
import Container from '@/components/Container'
import Heading from '@/components/Heading'
import Subheading from '@/components/Subheading'
import Paragraph from '@/components/Paragraph'
import IconJS from '@/assets/images/svg/js.svg'
import IconReact from '@/assets/images/svg/react.svg'
import IconNode from '@/assets/images/svg/node.svg'

const Skills = () => {
  const skillsRef = useNav('Skills')

  const skillsChartData = [
    { name: 'JavaScript', icon: <IconJS />, progressed: '60%' },
    { name: 'React', icon: <IconReact />, progressed: '35%' },
    { name: 'Node.js', icon: <IconNode />, progressed: '40%' },
  ]

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to('#skillsSection', {
      scrollTrigger: {
        trigger: '#skillsSection',
        start: 'bottom 30%',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 0,
    })

    gsap.from('#skillsHeading', {
      scrollTrigger: {
        trigger: '#skillsHeading',
        start: 'top bottom',
        end: 'top 40%',
        scrub: true,
      },
      yPercent: 100,
      opacity: 0,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#skillsSection',
          start: 'top bottom',
          end: 'top 40%',
          scrub: true,
        },
      })
      .from('.skills__progressBar', {
        xPercent: -200,
        opacity: 0,
        stagger: 0.15,
      })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#skillsSection',
          start: 'top bottom',
          end: 'top 40%',
          scrub: true,
        },
      })
      .from('.skills__col', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.15,
      })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section className="skills section" id="skillsSection" ref={skillsRef}>
      <Container>
        <Heading id="skillsHeading">Skills</Heading>
        <div className="skills__inner d-g">
          <div className="skills__col skills__col--charts d-f fd-c">
            {skillsChartData.map((skillChart, idx) => (
              <div className="skills__item" key={idx}>
                <Subheading className="skills__subject d-if ai-c">
                  {skillChart.icon}
                  <span className="skills__chartName">{skillChart.name}</span>
                </Subheading>
                <div className="skills__progress">
                  <div
                    className="skills__progressBar"
                    style={{ width: `${skillChart.progressed}` }}
                  />
                  <div className="skills__label">{skillChart.progressed}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="skills__col" id="skillsText">
            <Subheading variant="centered">Other skills:</Subheading>
            <Paragraph>
              Responsive and adaptive design, BEM, HTML, CSS, TailwindCSS, Bootstrap, Bulma, EJS,
              Pug (Jade), SASS/SCSS, PostCSS, NPM, Yarn, Gulp, Webpack, Git, Figma, Adobe Photoshop,
              Atlassian Jira.
            </Paragraph>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Skills
