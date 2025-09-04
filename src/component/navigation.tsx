"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Activity } from "lucide-react"
import { usePathname } from "next/navigation"
import { DialogDemo } from "./modal"
import { useContext } from "react"
import StepContext from "@/store/useStore"

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
}

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = "" }: NavigationProps) {
  const pathname = usePathname()
  const context = useContext(StepContext)
  const open = context?.open ?? false
  const setOpen = context?.setOpen ?? (() => {})

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Support", href: "/support" },
  ]

  return (
    <motion.header
      className={`border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.a href="/" className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-[var(--font-work-sans)] text-foreground">downtime</span>
        </motion.a>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`transition-colors font-[var(--font-open-sans)] ${
                pathname === item.href ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <motion.div {...scaleOnHover}>
          <DialogDemo open={open} setOpen={setOpen}/>
        </motion.div>
      </div>
    </motion.header>
  )
}
