import { IoLogoWhatsapp } from "react-icons/io5";
import { Metadata } from "../lib/metadata";

export default function FloatButton() {

  const whatsappContact = Metadata.contacts.find((contact) => {
    return contact.name === "whatsapp"
  })

  return (
    <a href={whatsappContact.url} target={whatsappContact.target} className="fixed bottom-8 right-3 p-4 z-10 rounded-full shadow-sm bg-green-600 sm:hidden">
      <IoLogoWhatsapp size={42} className="text-white"></IoLogoWhatsapp>
    </a>
  )
}