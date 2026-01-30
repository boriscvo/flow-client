"use client"
import { Text } from "@/components/atoms"
import { Globe } from "lucide-react"

export function Timezone() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

  const parts = new Intl.DateTimeFormat("en", {
    timeZone: tz,
    timeZoneName: "short",
  }).formatToParts(new Date())

  const shortTz = parts.find((p) => p.type === "timeZoneName")?.value
  return (
    <div className="flex items-center gap-x-1">
      <Globe size="18" />
      <Text variant="icon-label">{shortTz}</Text>
    </div>
  )
}
