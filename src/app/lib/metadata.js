import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5"
import { LuPhone } from "react-icons/lu"

export const Metadata = {
  contacts: [
    {
      icon: <LuPhone></LuPhone>,
      text: "telefone",
      url: "#"
    },
    {
      icon: <IoLogoWhatsapp></IoLogoWhatsapp>,
      text: "whatsapp",
      url: "#"
    },
    {
      icon: <IoLogoInstagram></IoLogoInstagram>,
      text: "instagram",
      url: "#"
    },
    {
      icon: <IoLogoFacebook></IoLogoFacebook>,
      text: "facebook",
      url: "#"
    },
  ],
  address: {
    address: "Av. César Lattes, 129 - Jardim Presidente",
    city: "Goiânia - GO",
    postal_code: "74353-250"
  },
  company: {
    name: "Evolução Bike",
    cnpj: "01.333.444/0001-55",
    email: "email@email.com.br"
  }
}