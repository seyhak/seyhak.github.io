import { Avatar, Typography } from "@mui/material"
import classNames from "classnames"
// import Image from "next/image"
import "./IntroSection.sass"

export type IntroSectionProps = {
  className?: string
}
export const IntroSection = ({
  className
}: IntroSectionProps) => {
  return(
    <section className={classNames("intro", className)}>
      <div className="description-wrapper">
        <Typography variant="h2" gutterBottom>
          Seyhak Ly
        </Typography>
        <div className="bottom">
        <Avatar
          src="/photos/profile-pic.png"
          sizes="large"
          className="avatar"
          // width={250}
          // height={250}
          alt="Picture of the author"
        />
        <Typography variant="subtitle2" gutterBottom>
          Welcome to my CV page!
        </Typography>

        </div>
      </div>
    </section>
  )
}
