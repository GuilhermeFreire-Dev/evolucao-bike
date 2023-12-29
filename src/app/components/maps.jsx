import { Metadata } from "../lib/metadata";

export default function Maps() {
  return (
    <iframe
      className="w-full h-64 rounded-2xl sm:h-full"
      referrerPolicy="no-referrer-when-downgrade"
      src={Metadata.maps.embed}
      allowFullScreen>
    </iframe>
  )
}