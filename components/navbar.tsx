import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar"
import { Link } from "@nextui-org/link"
import { link as linkStyles } from "@nextui-org/theme"
import { siteConfig } from "@/config/site"
import clsx from "clsx"
import { ThemeSwitch } from "@/components/theme-switch"
import { usePathname, useRouter } from "next/navigation"
import { Icon } from "@iconify/react"

interface NavbarProps {
  setIsVisible: (isVisible: boolean) => void
  duration: number
}

export const Navbar = ({ setIsVisible, duration }: NavbarProps) => {
  const { push } = useRouter()
  const path = usePathname()

  const handleClick = (href: string) => {
    if (href !== path) {
      setIsVisible(false)
      setTimeout(() => {
        push(href)
      }, duration * 1000)
    }
  }

  const navItem = (item: { href: string; label: string }) => {
    const icons: {
      [key: string]: string
    } = {
      "/": "octicon:home-16",
      "/about": "mingcute:question-line",
      "/contact": "ic:round-whatsapp",
      "/projects": "tabler:photo-filled",
    }
    return (
      <NavbarItem
        className="flex justify-center content-center"
        key={item.href}
      >
        <Link
          className={clsx(
            linkStyles({ color: "foreground" }),
            `data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer  ${
              item.href === "/" ? "font-bold" : ""
            }`
          )}
          color="foreground"
          onPress={() => handleClick(item.href)}
        >
          <p className="hidden md:flex">{item.label}</p>
          <Icon className="md:hidden" icon={icons[item.href]} height={20} />
        </Link>
      </NavbarItem>
    )
  }

  return (
    <NextUINavbar maxWidth="full" position="sticky">
      <NavbarContent className="">
        <ul className="flex gap-4 ml-2">
          {siteConfig.navItems.map((item) => navItem(item))}
        </ul>
      </NavbarContent>
      <NavbarContent className="basis-1 pl-4" justify="end">
        {/* <ThemeSwitch /> */}
      </NavbarContent>
    </NextUINavbar>
  )
}
