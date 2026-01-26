import { BadgeProps } from "./types"
import { CardStatus, Info } from "./variants"

export function Badge(props: BadgeProps) {
  switch (props.variant) {
    case "card-status": {
      const { label, state } = props
      return <CardStatus state={state} label={label} />
    }
    case "info": {
      const { label } = props
      return <Info label={label} />
    }
  }
}
