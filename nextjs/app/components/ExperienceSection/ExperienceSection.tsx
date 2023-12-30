import { Typography } from "@mui/material"
import classNames from "classnames"
import "./ExperienceSection.sass"
import { ExperienceItem } from "./components/ExperienceItem/ExperienceItem"

type ExperienceSectionProps = {
  className?: string
}

export const ExperienceSection = ({className}: ExperienceSectionProps) => {
  return (
    <section className={classNames("ExperienceSection", className)}>
      <Typography variant="h2" gutterBottom>
        Experience
      </Typography>
    <div>
      <ExperienceItem date="12.2023 – now">
        Self employed freelancing & consulting
      </ExperienceItem>
      <ExperienceItem date="11.2022 – 11.2023">
        World tour gap year
      </ExperienceItem>
      <ExperienceItem date="04.2022 – 11.2022">
        Fullstack Web Developer at Acaisoft
        Building API on Django (DRF) and React. On side project utilized
        GraphQL. Additional PoC React and Tauri.
        Achievements: Optimized query from 7s to below 1, Dockerized the
        project, introduced FE tests, decreased weight of FE package.
      </ExperienceItem>
      <ExperienceItem date="02.2020 – 03.2022">
        Fullstack Web Developer at Correct Context - Shareablee
        Building REST API using Django (DRF) and frontend with React
        + Redux. Utilizing external APIs, processing that data and
        presenting the data in various attractive ways. ElasticSearch and
        Postgres were the main databases.
        Achievements: Optimized ES and PG queries. Bumped Python from 2
        to 3, Refactored plenty of code utilizing Builder pattern.
      </ExperienceItem>
      <ExperienceItem date="11.2019 - 01.2020">
        Junior Support Specialist at Hemmersbach, Wrocław
      </ExperienceItem>
    </div>
  </section>
  )
}
