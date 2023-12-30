import { Typography, Avatar } from "@mui/material"
import classNames from "classnames"
import "./ContactSection.sass"
import { Contact } from "./components/Contact/Contact"

export type ContactSectionProps = {
  className?: string
}

export type ContactType = {
  id: string
  name: string
  email: string
  phone: string
  photo?: string
}

const CONTACTS: ContactType[] = [
  {
    id: "1",
    name: "Seyhak Ly",
    email: "seyhaklyco@gmail.com",
    phone: "+48509989307",
    photo: "/contact-avatars/seyhak.jpg"
  },
  {
    id: "2",
    name: "Boomer",
    email: "boomer@gmail.com",
    phone: "+4859889485",
    photo: "/contact-avatars/boomer.png"
  },
]

export const ContactSection = ({className}: ContactSectionProps) => {
  
  return(
    <section className={classNames(className)}>
      <Typography variant="h2" gutterBottom>
        Contact
      </Typography>
      <section className="contacts">
        {CONTACTS.map(contact => <Contact key={contact.id} avatarProps={{
          alt: contact.name,
        }} contact={contact}
        />)
        }
      </section>

    </section>

  )
}
