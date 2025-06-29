import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import ClientLayout from './components/ClientLayout'
import ThreeDBackground from './components/ThreeDBackground'

export const metadata = {
  title: 'Jaskaranpreet Singh Portfolio',
  description: 'Senior Software Engineer Portfolio'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans scroll-smooth bg-[#101828] text-gray-100 transition-colors duration-300">
        <ThemeProvider>

          <ThreeDBackground/>
          <Navbar />
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
