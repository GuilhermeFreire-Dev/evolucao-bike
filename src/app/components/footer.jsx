import Image from "next/image"
import { Metadata } from "../lib/metadata"
import { LuMapPin } from "react-icons/lu"

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-zinc-50 bottom-0 w-full px-10 py-10 sm:flex sm:justify-between">
      <div className="flex flex-col justify-center items-center sm:items-start">
        {/* <Image src={"/logo-white.svg"} width={334} height={56}></Image> */}
        <img src="/logo-white.svg" width={334} height={56} alt="" />
        <div className="mt-3">
          <p>{ Metadata.company.cnpj }</p>
          <p>{ Metadata.company.email }</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center my-10 sm:flex sm:flex-row">
        <LuMapPin size={48}></LuMapPin>
        <div className="mx-5 text-center sm:text-left">
          <p>{ Metadata.address.address }</p>
          <p>{ Metadata.address.city }</p>
          <p>{ Metadata.address.postal_code }</p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:block">
        {
          Metadata.contacts.map((contact) => {
            return (
              <a href={contact.url} className="flex items-center my-2 sm:my-3 hover:bg-stone-600 rounded-full px-3 pt-1 pb-2 duration-200">
                <span className="pt-0.5">{ contact.icon }</span>
                <p className="mx-1">{ contact.text }</p>
              </a>
            )
          })
        }
      </div>
    </footer>
  )
}