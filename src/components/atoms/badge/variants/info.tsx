import { Badge } from "@/components/_ui/badge"
import { InfoBadgeProps } from "../types"

export function Info({ label }: Pick<InfoBadgeProps, "label">) {
  return <Badge variant="secondary">{label}</Badge>
}
