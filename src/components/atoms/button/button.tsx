import { ButtonProps } from "./types"
import { AddNew, InlineCard } from "./variants"
import { Button as UIButton } from "@/components/_ui/button"

export function Button(props: ButtonProps) {
  switch (props.variant) {
    case "inline-card":
      return <InlineCard {...props} />
    case "secondary":
    case "destructive":
    case "outline":
    case "default": {
      const { label, variant, handleClick } = props
      return (
        <UIButton
          variant={variant}
          className="hover:cursor-pointer"
          onClick={handleClick}
        >
          {label}
        </UIButton>
      )
    }
    case "add-new": {
      const { label, handleClick } = props
      return <AddNew label={label} handleClick={handleClick} />
    }
  }
}
