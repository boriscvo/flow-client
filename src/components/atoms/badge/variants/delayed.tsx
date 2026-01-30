import { Badge } from "@/components/_ui/badge"
import { InfoBadgeProps } from "../types"

export function Delayed({ label }: Pick<InfoBadgeProps, "label">) {
  return <Badge variant="delayed">{label}</Badge>
}
