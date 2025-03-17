import { Metadata } from "next"
import Navigation from "../components/navigation"

const title2 = 'Next Movies2'

export const metadata :Metadata ={
  title:{
    template: `%s | ${title2}`  ,
    default: title2
  },
  description: "The best movies on the best frameworks"
}

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <main>
            <Navigation/>
            {children}
            </main>
        </body>
      </html>
    )
  }