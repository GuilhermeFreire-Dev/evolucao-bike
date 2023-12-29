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
  ],
  maps: {
    link: "https://maps.app.goo.gl/1cs7y2vqy7kYaVjK8",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.9135779453054!2d-49.3247435759948!3d-16.73101953900724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7aa7e4a0791%3A0x9501fff08917cbe3!2zRXZvbHXDp8OjbyBCaWtl!5e0!3m2!1spt-BR!2sbr!4v1703862467270!5m2!1spt-BR!2sbr"
  }
}