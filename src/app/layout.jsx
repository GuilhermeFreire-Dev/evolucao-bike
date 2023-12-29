import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Background from './components/background'

export const metadata = {
  title: 'Evolução Bike',
  description: 'Loja de bicicletas em Goiânia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="overflow-hidden">
        <Navbar></Navbar>
        <main className="mt-16 overflow-y-scroll bg-cover bg-top h-[94vh] sm:mt-28 sm:h-[90vh]">
          {children}
          <Footer></Footer>
        </main>
        <Background></Background>
      </body>
    </html>
  )
}
