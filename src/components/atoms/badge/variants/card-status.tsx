import { Badge } from "@/components/_ui/badge"
import { CardStatusBadgeProps } from "../types"
import { Formatted } from "../ui"

export function CardStatus({
  state,
  label,
}: Pick<CardStatusBadgeProps, "state" | "label">) {
  switch (state) {
    case "completed":
      return (
        <Badge variant="success">
          <Formatted variant="status" label={label} />
        </Badge>
      )
    case "scheduled":
      return (
        <Badge variant="warning">
          <Formatted variant="status" label={label} />
        </Badge>
      )
    case "failed":
      return (
        <Badge variant="error">
          <Formatted variant="status" label={label} />
        </Badge>
      )
  }
}
