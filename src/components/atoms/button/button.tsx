import { ButtonProps } from "./types"
import { InlineCard } from "./variants"
import { Button as UIButton } from "@/components/_ui/button"

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case "inline-card":
      return <InlineCard {...props} />
    case "secondary":
    case "destructive":
    case "outline":
    case "default": {
      const { label, handleClick, variant } = props
      return (
        <UIButton
          variant={variant}
          onClick={handleClick}
          className="hover:cursor-pointer"
        >
          {label}
        </UIButton>
      )
    }
  }
}
