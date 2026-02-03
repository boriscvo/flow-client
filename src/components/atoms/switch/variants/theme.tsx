"use client"
import { useTheme } from "next-themes"
import { Label } from "@/components/_ui/label"
import { Switch as UISwitch } from "@/components/_ui/switch"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { LoadingSkeleton } from "../../loading-skeleton/loading-skeleton"

export function Theme() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  return (
    <div className="flex items-center">
      <Label
        htmlFor="theme-switch"
        className="hover:cursor-pointer mr-0 pr-1.5"
      >
        <Sun size="18" />
      </Label>
      {isMounted ? (
        <UISwitch
          id="theme-switch"
          checked={theme === "dark"}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          className="border-2 border-foreground hover:cursor-pointer"
        />
      ) : (
        <LoadingSkeleton className="h-4.5 w-8 rounded-full" />
      )}
      <Label htmlFor="theme-switch" className="hover:cursor-pointer pl-1.5">
        <Moon size="18" />
      </Label>
    </div>
  )
}
