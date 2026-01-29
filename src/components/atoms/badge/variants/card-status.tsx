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
        <Badge variant="card-success">
          <Formatted label={label} />
        </Badge>
      )
    case "scheduled":
      return (
        <Badge variant="card-warning">
          <Formatted label={label} />
        </Badge>
      )
    case "failed":
      return (
        <Badge variant="card-error">
          <Formatted label={label} />
        </Badge>
      )
  }
}
