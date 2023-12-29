import Image from 'next/image'
import Content from './components/content'
import Title from './components/title'
import { Metadata } from './lib/metadata'
import Text from './components/text'
import Carousel from './components/carousel'
import Maps from './components/maps'

export default function Home() {
  return (
    <div>
      <div className="w-full overflow-hidden flex items-end pb-10 px-10 h-[64vh] bg-gradient-to-r from-black to-transparent bg-opacity-75 sm:h-[38vw] sm:pb-20 sm:px-20">
        <Title 
          title={"Redefina seu percurso, viva a liberdade sobre duas rodas na Evolução Bike."} 
          rightLine={false} 
          className={"text-white whitespace-pre-wrap sm:w-1/3 sm:text-6xl"}>
        </Title>
      </div>
      <div className="bg-zinc-50">
        <Content content={
          <div>
            <Title title={"quem somos"} rightLine={true}></Title>
            <div className="text-justify sm:flex">
              <Text className={"mb-5 sm:pr-10 sm:mb-0"} text={"Lorem ipsum dolor sit amet. Sit molestiae debitis aut galisum enim et sapiente veritatis ut atque quam sed facilis dolor. Eum fugit inventore qui voluptatum vitae et harum voluptas cum laudantium saepe ut error ipsa ut eligendi tempora in doloremque blanditiis. Et modi voluptatem est temporibus laudantium et doloremque maiores aut omnis consequatur."}></Text>
              <Image src={"/store-front.svg"} alt='fachada' width={400} height={400} className="rounded-3xl"></Image>
            </div>
          </div>
        }></Content>
        <Content content={
          <div>
            <Title title={"fotos"} rightLine={true}></Title>
            <Carousel images={Metadata.galleryImages}></Carousel>
          </div>
        }></Content>
        <Content content={
          <div>
            <Title title={"serviços"} rightLine={true}></Title>
            <div className="flex flex-wrap justify-center w-2/3 m-auto">
              {
                Metadata.services.map((service) => {
                  return (
                    <div className="flex flex-col max-w-52 mx-10 my-5 items-center text-center" key={service.alt}>
                      <Image src={service.image} alt={service.alt} width={52} height={52}></Image>
                      <Text className={"mt-3"} text={service.description}></Text>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }></Content>
        <Content content={
          <div className="mb-5 sm:flex sm:justify-between">
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
                      <div key={openingTime.day}>
                        <Text text={ openingTime.day }></Text>
                        <Text text={ openingTime.time }></Text>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="sm:w-1/2">
              <Maps></Maps>
            </div>
          </div>
        }></Content>
      </div>
    </div>
  )
}
