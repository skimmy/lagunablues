import './globals.css'
import Navigation from './navigation'

export const metadata = {
  title: 'Laguna Blues - Falkenstein',
  description: 'Food, Blues and Fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white font-serif">
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <div>
              <Navigation></Navigation>
            </div>
            <div className="mx-auto">
              {children}
            </div>
          </div>
          <footer className="bg-black text-white text-center p-4">
            <span className="text-xs text-thin">© {new Date().getFullYear()} Laguna Blues (Falkenstein, Germany). All rights reserved.</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
