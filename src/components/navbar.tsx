"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import type React from "react" // Added import for React

const Navbar = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              MDConvert Pro
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/" current={pathname === "/"}>
                Home
              </NavLink>
              <NavLink href="/features" current={pathname === "/features"}>
                Features
              </NavLink>
              <NavLink href="/pricing" current={pathname === "/pricing"}>
                Pricing
              </NavLink>
              <NavLink href="/about" current={pathname === "/about"}>
                About
              </NavLink>
              <NavLink href="/faq" current={pathname === "/faq"}>
                FAQ
              </NavLink>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-4"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, current, children }: { href: string; current: boolean; children: React.ReactNode }) => (
  <Link
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium ${
      current
        ? "bg-primary text-primary-foreground"
        : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
    }`}
  >
    {children}
  </Link>
)

export default Navbar

