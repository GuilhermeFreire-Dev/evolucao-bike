'use client'
import Image from "next/image";
import { Metadata } from "../lib/metadata"
import { LuMenu } from "react-icons/lu";
import Text from "./text";
import { useState } from "react";
import Menu from "./menu";


export default function Navbar() {

  const [menuEnabled, setMenuEnabled] = useState(false)

  return (
    <header className="bg-stone-950 text-zinc-50 flex items-center fixed top-0 z-20 w-full px-3 py-6 shadow-lg sm:justify-between sm:py-9 sm:px-10">
      <LuMenu size={24} className="ml-2 mr-5 sm:hidden" onClick={() => {setMenuEnabled(true)}}></LuMenu>
      <Image src={"/logo.svg"} width={0} height={0} className="w-32 sm:w-48" alt="logotipo"></Image>
      <div className="hidden sm:flex">
        {
          Metadata.contacts.map((contact) => {
            return (
              <a href={contact.url} className="flex items-center mx-3 hover:bg-stone-600 rounded-full px-3 py-2 duration-200" target={contact.target} key={contact.text}>
                <span>{ contact.icon }</span>
                <Text className={"mx-2 font-semibold"} text={contact.text}></Text>
              </a>
            )
          })
        }
      </div>
      <Menu enable={setMenuEnabled} isEnabled={menuEnabled}></Menu>
    </header>
  )
}