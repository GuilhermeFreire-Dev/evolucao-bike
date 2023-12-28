import Image from 'next/image'
import Content from './components/content'
import Title from './components/title'
import { Metadata } from './lib/metadata'
import Text from './components/text'

export default function Home() {
  return (
    <>
      <div style={{backgroundImage: "url('/pexels-philipp-m-100582.jpg')"}} className="w-full h-96 bg-cover bg-center"></div>
      <Content content={
        <>
          <Title title={"quem somos"} rightLine={true}></Title>
          <div className="text-justify sm:flex">
            <Text className={"mb-5 sm:pr-10 sm:mb-0"} text={"Lorem ipsum dolor sit amet. Sit molestiae debitis aut galisum enim et sapiente veritatis ut atque quam sed facilis dolor. Eum fugit inventore qui voluptatum vitae et harum voluptas cum laudantium saepe ut error ipsa ut eligendi tempora in doloremque blanditiis. Et modi voluptatem est temporibus laudantium et doloremque maiores aut omnis consequatur."}></Text>
            <Image src={"/store-front.svg"} alt='fachada' width={400} height={400} className="rounded-3xl"></Image>
          </div>
        </>
      }></Content>
      <Content content={
        <Title title={"fotos"} rightLine={true}></Title>
      }></Content>
      <Content content={
        <>
          <Title title={"serviços"} rightLine={true}></Title>
          <div className="flex flex-wrap justify-center w-2/3 m-auto">
            {
              Metadata.services.map((service) => {
                return (
                  <div className="flex flex-col max-w-52 mx-10 my-5 items-center text-center">
                    <Image src={service.image} alt={service.alt} width={52} height={52}></Image>
                    <Text className={"mt-3"} text={service.description}></Text>
                  </div>
                )
              })
            }
          </div>
        </>
      }></Content>
      <Content content={
        <div className="sm:flex sm:justify-between">
          <div className="mb-5 sm:mb-0">
            <div className="mb-5">
              <Title title={"endereço"}></Title>
              <Text text={ Metadata.address.address }></Text>
              <Text text={ Metadata.address.city }></Text>
              <Text text={ Metadata.address.postal_code }></Text>
            </div>
            <div>
              <Title title={"horário de funcionamento"}></Title>
              {
                Metadata.openingHours.map((openingTime) => {
                  return (
                    <>
                      <Text text={ openingTime.day }></Text>
                      <Text text={ openingTime.time }></Text>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div>
            {/* Google Maps API here */}
            <Image src={"/maps.svg"} alt='mapa' width={400} height={400}></Image>
          </div>
        </div>
      }></Content>
    </>
  )
}
