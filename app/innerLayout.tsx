"use client"
import { Providers } from "./providers"
import Link from "next/link"
import { ThemeSwitch } from "@/components/theme-switch"
import PageTransition from "./page-transition"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function InnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const duration = 0.5
  const [isVisible, setIsVisible] = useState(true)
  const path = usePathname()

  useEffect(() => {
    setIsVisible(true)
  }, [path])

  return (
    <main>
      <Providers themeProps={{ attribute: "class", enableSystem: true }}>
        <div className="w-screen h-screen absolute z-0">
          <nav className=" absolute z-10 left-16 top-10 text-[24px] font-bold hover:text-secondary-500 active:text-secondary-600 cursor-pointer">
            <Link href={"/"}>
              <p className="">Mich Corona</p>
            </Link>
          </nav>
          <nav className="rotate-270 absolute z-10 left-6 bottom-16 text-xl font-semibold hover:text-secondary-500 active:text-secondary-600 cursor-pointer">
            <Link href={"/contact"}>
              <p>contact</p>
            </Link>
          </nav>
          <nav className="absolute z-10 right-16 top-10 flex text-xl font-semibold cursor-pointer">
            <Link
              href={"/about"}
              className="hover:text-secondary-500 active:text-secondary-600"
            >
              <p className="mr-5">about</p>
            </Link>
            <ThemeSwitch />
          </nav>
          {/* <PageTransition isVisible={isVisible} duration={duration}> */}
          {children}
          {/* </PageTransition> */}
        </div>
      </Providers>
    </main>
  )
}
