import Image from "next/image";
import { Metadata } from "../lib/metadata"
import { LuMenu } from "react-icons/lu";

export default function Navbar() {

  return (
    <header className="bg-stone-950 text-zinc-50 flex items-center px-3 py-5 sm:justify-between sm:py-10 sm:px-10">
      <LuMenu size={24} className="ml-2 mr-5 sm:hidden"></LuMenu>
      {/* <Image src={"/logo.svg"} width={210} height={38}></Image> */}
      <img src="/logo.svg" alt="" width={210} height={38} />
      <div className="hidden sm:flex">
        {
          Metadata.contacts.map((contact) => {
            return (
              <a href={contact.url} className="flex items-center mx-3 hover:bg-stone-600 rounded-full px-3 pt-1 pb-2 duration-200">
                <span className="pt-0.5">{ contact.icon }</span>
                <p className="mx-1">{ contact.text }</p>
              </a>
            )
          })
        }
      </div>
    </header>
  )
}