import { useTheme } from "next-themes"
import { Label } from "@/components/_ui/label"
import { Switch as UISwitch } from "@/components/_ui/switch"
import { Moon, Sun } from "lucide-react"

export function Theme() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="flex items-center space-x-2">
      <Label
        htmlFor="theme-switch"
        className="hover:cursor-pointer mr-0 pr-1.5"
      >
        <Sun size="18" />
      </Label>
      <UISwitch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="border-2 border-foreground hover:cursor-pointer mr-0"
      />
      <Label htmlFor="theme-switch" className="hover:cursor-pointer pl-1.5">
        <Moon size="18" />
      </Label>
    </div>
  )
}
