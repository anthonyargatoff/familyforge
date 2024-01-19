import styles from "./globals.css";
import Navbar from "./ui/navigation/Navbar"
import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlex = IBM_Plex_Mono({
  weight: '400',
  subsets: ['latin']
});

export const metadata = {
  title: 'Family Forge',
  description: 'Connecting with family, friends and loved ones',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ibmPlex.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
