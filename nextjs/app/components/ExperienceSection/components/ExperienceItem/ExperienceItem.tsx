import { Typography } from "@mui/material"
import { ReactNode } from "react"
import "./ExperienceItem.sass"

type ExperienceItemProps = {
  date: string
  children: ReactNode
}
export const ExperienceItem = ({
  date,
  children
}: ExperienceItemProps) => {
  return (
    <div className="ExperienceItem">
      <Typography>
        {date}
      </Typography>
      <Typography>{children}</Typography>
    </div>
  )
}
