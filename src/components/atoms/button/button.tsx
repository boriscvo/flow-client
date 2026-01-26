import { ButtonProps } from "./types"
import { InlineCard } from "./variants"

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case "inline-card":
      return <InlineCard {...props} />
  }
}
