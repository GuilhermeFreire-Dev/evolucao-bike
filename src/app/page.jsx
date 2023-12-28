import Image from 'next/image'
import Content from './components/content'
import Title from './components/title'
import { Metadata } from './lib/metadata'

export default function Home() {
  return (
    <>
      <div style={{backgroundImage: "url('/pexels-philipp-m-100582.jpg')"}} className="w-full h-96 bg-cover bg-center"></div>
      <Content content={
        <>
          <Title title={"quem somos"}></Title>
          <div className="text-justify sm:flex">
            <p className="mb-5 sm:pr-10 sm:mb-0">Lorem ipsum dolor sit amet. Sit molestiae debitis aut galisum enim et sapiente veritatis ut atque quam sed facilis dolor. Eum fugit inventore qui voluptatum vitae et harum voluptas cum laudantium saepe ut error ipsa ut eligendi tempora in doloremque blanditiis. Et modi voluptatem est temporibus laudantium et doloremque maiores aut omnis consequatur.</p>
            {/* <Image src={"/store-front.svg"} width={400} height={400} className="rounded-3xl"></Image> */}
            <img src="/store-front.svg" alt="" width={400} height={400} />
          </div>
        </>
      }></Content>
      <Content content={
        <Title title={"fotos"} rightLine={true}></Title>
      }></Content>
      <Content content={
        <Title title={"serviços"} rightLine={true}></Title>
      }></Content>
      <Content content={
        <div className="sm:flex sm:justify-between">
          <div className="mb-5 sm:mb-0">
            <div className="mb-5">
              <Title title={"endereço"}></Title>
              <p>{ Metadata.address.address }</p>
              <p>{ Metadata.address.city }</p>
              <p>{ Metadata.address.postal_code }</p>
            </div>
            <div>
              <Title title={"horário de funcionamento"}></Title>
              {
                Metadata.openingHours.map((openingTime) => {
                  return (
                    <>
                      <p>{ openingTime.day }</p>
                      <p>{ openingTime.time }</p>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div>
            {/* Google Maps API here */}
            {/* <Image src={"/maps.svg"} width={400} height={400}></Image> */}
            <img src="/maps.svg" alt="" width={400} height={400} />
          </div>
        </div>
      }></Content>
    </>
  )
}
