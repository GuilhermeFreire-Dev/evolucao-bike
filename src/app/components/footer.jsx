import Image from "next/image"
import { Metadata } from "../lib/metadata"
import { LuMapPin } from "react-icons/lu"
import Text from "./text"

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-zinc-50 bottom-0 w-full px-10 py-10 sm:flex sm:justify-between">
      <div className="flex flex-col justify-center items-center sm:items-start">
        {/* <Image src={"/logo-white.svg"} width={334} height={56}></Image> */}
        <img src="/logo-white.svg" width={334} height={56} alt="" />
        <div className="mt-3">
          <Text text={ Metadata.company.cnpj }></Text>
          <Text text={ Metadata.company.email }></Text>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10 sm:flex sm:flex-row">
        <LuMapPin size={48}></LuMapPin>
        <div className="mx-5 text-center sm:text-left">
          <Text text={ Metadata.address.address }></Text>
          <Text text={ Metadata.address.city }></Text>
          <Text text={ Metadata.address.postal_code }></Text>
        </div>
      </div>
      <div className="flex flex-col items-center sm:block">
        {
          Metadata.contacts.map((contact) => {
            return (
              <a href={contact.url} className="flex items-center my-2 sm:my-3 hover:bg-stone-600 rounded-full px-3 py-2 duration-200" target="_blank">
                <span>{ contact.icon }</span>
                <Text className={"mx-2 font-semibold"} text={contact.text}></Text>
              </a>
            )
          })
        }
      </div>
    </footer>
  )
}