import './globals.css'
import Navigation from './navigation'

export const metadata = {
  title: 'Laguna Blues - Falkenstein',
  description: 'Food, Blues and Fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-sans">
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div className="print:hidden">
              <Navigation></Navigation>
            </div>
            <div className="flex-grow mx-auto">
              {children}
            </div>
          </div>
          <div className="flex-grow print:hidden">
            <footer className="bg-black text-gray-300 text-sm p-6">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2">
              <div className="justify-start text-left">
                <p className=""><span className="text-laguna-red">Laguna</span> <span className="text-laguna-yellow">Blues</span></p>
                <p>Kirchbergstraße 3</p>
                <p>93167 Falkenstein</p>
                <p>Tel.(+49) 09462 322</p>
              </div>
              <div className="justify-end text-right">
                <p className="text-laguna-yellow">Öffnungszeiten</p>
                <p>11.30 - 14.00 Uhr 17.30 - 23.00 Uhr</p>
                <p>Freitag 17.30 - 23.00 Uhr</p>
                <p>Montag Ruhetag</p>
                <p>Alle Feiertage offen</p>
                <p>Keine Lieferung</p>
              </div>
            </div>
            <div className="mt-2 text-center">
                <span className="text-xs text-thin">© {new Date().getFullYear()} Laguna Blues (Falkenstein, Germany). All rights reserved.</span>
            </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}
