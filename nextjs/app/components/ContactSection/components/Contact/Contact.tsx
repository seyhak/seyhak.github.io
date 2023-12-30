import "./Contact.sass"
import { Avatar, AvatarProps, Typography } from "@mui/material"
import PhoneIcon from '@mui/icons-material/Phone'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { ContactType } from "../../ContactSection"

const EMAIL_SUBJECT = "Hello I'm writting regarding to Nunchakorest!"
const EMAIL_BODY = "Your app made me curious about our cooperation. Please contact with me."
export type ContactProps = {
  contact: ContactType
  avatarProps: AvatarProps
  isAnimated?: boolean
}

export const Contact = ({ contact, avatarProps, isAnimated = true }: ContactProps) => {
  return (
    <div className="contact">
      <div className="base">
        <Avatar {...avatarProps} src={contact.photo} className="avatar" />
        <Typography variant="h4">
            {contact.name}
          </Typography>
      </div>
      <div className="details">
        <div className="header">
          <Avatar {...avatarProps} src={contact.photo} className="avatar" />
          <Typography variant="h4">
            {contact.name}
          </Typography>
        </div>
        <div className="content">
          <Typography variant="h6" component="a" href={`mailto:${contact.email}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`} title={contact.email}>
            <AlternateEmailIcon />{contact.email}
          </Typography>
          <Typography variant="h6" component="a" href={`tel:${contact.phone}`} title="phone">
            <PhoneIcon />{contact.phone}
          </Typography>
        </div>
      </div>
    </div>
  )
}
