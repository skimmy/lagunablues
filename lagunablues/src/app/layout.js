import './globals.css'

export const metadata = {
  title: 'Laguna Blues - Falkenstein',
  description: 'Food, Blues and Fun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
