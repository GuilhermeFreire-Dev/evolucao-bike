import { IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5"
import { LuPhone } from "react-icons/lu"

export const Metadata = {
  contacts: [
    {
      icon: <LuPhone size={24}></LuPhone>,
      text: "(62) 3998-6812",
      url: "tel:623998-6812",
      target: ""
    },
    {
      icon: <IoLogoWhatsapp size={24}></IoLogoWhatsapp>,
      text: "(62) 9 8159-2593",
      url: "https://api.whatsapp.com/send/?phone=5562981592593&text&type=phone_number&app_absent=0",
      target: "_blank"
    },
    {
      icon: <IoLogoInstagram size={24}></IoLogoInstagram>,
      text: "@evolucaobike",
      url: "https://www.instagram.com/evolucaobike?igshid=NmQ5Y2ExZGE1MQ%3D%3D",
      target: "_blank"
    },
    {
      icon: <IoLogoFacebook size={24}></IoLogoFacebook>,
      text: "Evolução Bike",
      url: "https://www.facebook.com/EvolucaoBike",
      target: "_blank"
    },
  ],
  address: {
    address: "Av. César Lattes, 129 - Jardim Presidente",
    city: "Goiânia - GO",
    postal_code: "74353-250"
  },
  company: {
    name: "Evolução Bike",
    cnpj: "17.780.044/0001-84",
    email: "evolucaobike@hotmail.com"
  },
  openingHours: [
    {
      day: "segunda á sexta",
      time: "8:00 ás 18:00"
    },
    {
      day: "sábado",
      time: "8:00 ás 12:00"
    }
  ],
  services: [
    {
      description: "Venda de bicicletas novas e acessórios",
      image: "/carrinho-de-compras.png",
      alt: "carrinho de compras"
    },
    {
      description: "Revisões e Reparos com equipe especializada",
      image: "/definicoes.png",
      alt: "ferramentas"
    },
    {
      description: "Produtos com garantia e nota fiscal",
      image: "/garantia.png",
      alt: "selo de garantia"
    },
    {
      description: "Revisão premium com peças originais",
      image: "/coroa.png",
      alt: "coroa"
    }
  ],
  galleryImages: [
    {
      url: "/IMG-1.jpg",
      alt: "bike-1"
    },
    {
      url: "/IMG-2.jpg",
      alt: "bike-2"
    },
    {
      url: "/IMG-3.jpg",
      alt: "bike-3"
    },
    {
      url: "/IMG-4.jpg",
      alt: "bike-4"
    },
    {
      url: "/IMG-5.jpg",
      alt: "bike-5"
    },
    {
      url: "/IMG-6.jpg",
      alt: "bike-6"
    },
    {
      url: "/IMG-7.jpg",
      alt: "bike-7"
    },
    {
      url: "/IMG-8.jpg",
      alt: "bike-8"
    },
    {
      url: "/IMG-9.jpg",
      alt: "bike-9"
    },
    {
      url: "/IMG-10.jpg",
      alt: "bike-10"
    },
  ]
}