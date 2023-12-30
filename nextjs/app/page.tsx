import { Icon, Typography } from "@mui/material"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import "./page.sass"
import Script from "next/script"
import { IntroSection } from "./components/IntroSection/IntroSection"
import { ContactSection } from "./components/ContactSection/ContactSection"
import { ExperienceSection } from "./components/ExperienceSection/ExperienceSection"

function reveal() {
  const ELEMENT_VISIBLE_THRESHOLD = 200
  const ANIMATED_SELECTOR = ".revealed"
  const ANIMATED_ACTIVE_CLASSNAME = "active"
  let reveals = document.querySelectorAll(ANIMATED_SELECTOR)

  reveals.forEach((item) => {
    const windowHeight = window.innerHeight
    const elementTop = item.getBoundingClientRect().top
    const elementBottom = item.getBoundingClientRect().bottom

    const isElementTopVisibleOnBottom =
      elementTop < windowHeight - ELEMENT_VISIBLE_THRESHOLD
    const isElementBottomVisible = elementBottom - ELEMENT_VISIBLE_THRESHOLD > 0
    const shouldBeActive = isElementTopVisibleOnBottom && isElementBottomVisible

    if (shouldBeActive) {
      item.classList.add(ANIMATED_ACTIVE_CLASSNAME)
    } else {
      item.classList.remove(ANIMATED_ACTIVE_CLASSNAME)
    }
  })
}
function handleArrowDisappearIfOnBottom() {
  const ELEMENT_VISIBLE_THRESHOLD = 200
  const ANIMATED_SELECTOR = ".arrow"
  const ANIMATED_ACTIVE_CLASSNAME = "active"
  let reveals = document.querySelectorAll(ANIMATED_SELECTOR)

  reveals.forEach((item, idx) => {
    const windowHeight = window.innerHeight

    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const allContentHeight = document.documentElement.scrollHeight

    const shouldDisappear = scrollTop + windowHeight >= allContentHeight - ELEMENT_VISIBLE_THRESHOLD
    if (shouldDisappear) {
      item.classList.remove(ANIMATED_ACTIVE_CLASSNAME)
    } else {
      item.classList.add(ANIMATED_ACTIVE_CLASSNAME)
    }
  })
}

export default function Home() {
  const str = `${reveal.toString()} ${handleArrowDisappearIfOnBottom.toString()}
  reveal()
  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", reveal)
    window.addEventListener("scroll", handleArrowDisappearIfOnBottom)
    }
  `

  return (
    <>
    <main className="main">
      <Script id="show-banner">{str}</Script>
      <IntroSection className="revealed"/>
      <section className="revealed">
        <Typography variant="h2" gutterBottom>
          Summary
        </Typography>
        <Typography>
        React and Django DRF web developer
        with 3 years of experience. Coding with
        KISS, DRY principles and automatic tests
        coverage. Minor experience with
        ElasticSearch and GraphQL. Well
        known REST approach and using external
        API providers. Opened for challenges
        therefore often utilized various tools out of
        my team’s scope – Cassandra, Tauri
        </Typography>
      </section>
      <ExperienceSection className="revealed fade-left"/>
      <section className='revealed fade-right '>
        <Typography variant="h2" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body2">
        SKILLS
        Frontend Backend
        Typescript, Javascript Django DRF, Node
        React, Redux, NextJS Python, Unittest, Pytest
        HTML & CSS, SASS, Stylus PostgreSQL, ElasticSearch
        ReactTestingLibrary, Jest Electron, GraphQL
        MUI, Eslint, Prettier, Husky, Yarn Celery, SQL, AWS
        Other
        Git, Docker, Jira, Figma, C#, Unity, Cypress, Insomnia, Rust, C++,
        Blender, Linux, Driving License B
        </Typography>
      </section>
      <section className='section  revealed'>
        <Typography variant="h2" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body2">
        Restaurant Web App
        Ordering application built on Django DRF and NextJS. PSQL as
        database.
        Tax Revo
        Python application for counting US stock market tax.
        Vet Base
        Javascript/Typescript React - Node (electron) application for
        collecting, adding, searching across database. Google Drive sync.
        </Typography>
      </section>
      <ContactSection className='section revealed'/>
      <Icon className='arrow'>
        <KeyboardArrowDownIcon />
      </Icon>
    </main>
    <footer>
          Seyhak Ly ©
    </footer>
    </>
  )
}
