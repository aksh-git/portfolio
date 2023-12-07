import { Raleway } from 'next/font/google'
import './globals.css'

const inter = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Akash Yadav',
  keywords : 'portfolio, full, stack, web, developer, akash yadav',
  description: 'Hey there!! i\'m Akash Yadav, A passionate fullstack developer from India. check out my profile here..',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
