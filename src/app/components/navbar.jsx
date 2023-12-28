import Image from "next/image";
import { Metadata } from "../lib/metadata"
import { LuMenu } from "react-icons/lu";
import Text from "./text";

export default function Navbar() {

  return (
    <header className="bg-stone-950 text-zinc-50 flex items-center px-3 py-5 sm:justify-between sm:py-10 sm:px-10">
      <LuMenu size={24} className="ml-2 mr-5 sm:hidden"></LuMenu>
      <Image src={"/logo.svg"} width={210} height={38}></Image>
      <div className="hidden sm:flex">
        {
          Metadata.contacts.map((contact) => {
            return (
              <a href={contact.url} className="flex items-center mx-3 hover:bg-stone-600 rounded-full px-3 py-2 duration-200" target="_blank">
                <span>{ contact.icon }</span>
                <Text className={"mx-2 font-semibold"} text={contact.text}></Text>
              </a>
            )
          })
        }
      </div>
    </header>
  )
}