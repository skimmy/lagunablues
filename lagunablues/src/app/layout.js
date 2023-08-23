import './globals.css'
import Navigation from './navigation'

export const metadata = {
  title: 'Laguna Blues - Falkenstein',
  description: 'Food, Blues and Fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Navigation></Navigation>
            <div className="max-w-6xl mx-auto p-2">
              {children}
            </div>
          </div>
          <footer className="bg-gray-800 text-white text-center p-4">
            <span className="text-xs text-thin">© {new Date().getFullYear()} Laguna Blues (Falkenstein, Germany). All rights reserved.</span>
          </footer>
        </div>
      </body>
    </html>
  )
}
