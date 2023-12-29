'use client'
import { LuX } from 'react-icons/lu'
import { Metadata } from '../lib/metadata'
import Text from './text'

export default function Menu({isEnabled, enable}) {
  return (
    <div className="fixed top-0 left-0 z-30 h-screen overflow-hidden bg-stone-950 transition-all" style={isEnabled ? {width: '80%'} : {width: 0}}>
      {
        isEnabled && (
          <div className="py-8 px-5">
          <div className="flex justify-between">
            <Text className={"text-2xl font-semibold"} text={"Contato"}></Text>
            <LuX size={24} onClick={() => {enable(false)}}></LuX>
          </div>
            {
              Metadata.contacts.map((contact) => {
                return (
                  <a href={contact.url} className="flex items-center my-8" target={contact.target} key={contact.text}>
                    <span>{ contact.icon }</span>
                    <Text className={"mx-2 font-semibold"} text={contact.text}></Text>
                  </a>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}