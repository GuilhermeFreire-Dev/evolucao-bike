import { Bebas_Neue } from 'next/font/google'

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400' })

export default function Title({title, rightLine, className}) {
  return (
    <div className="flex items-center mb-5">
      <h1 className={`${bebasNeue.className} whitespace-nowrap mr-5 text-4xl ${className}`}>{ title }</h1>
      {
        rightLine && (
          <hr className="border-stone-950 border-y-2 w-full" />
        )
      }
    </div>
  )
}