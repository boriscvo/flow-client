import { ButtonProps } from "./types"
import { AddNew, InlineCard } from "./variants"
import { Slot } from "@radix-ui/react-slot"
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
          type="button"
          variant={variant}
          className="hover:cursor-pointer min-w-20"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            handleClick()
            e.preventDefault()
          }}
        >
          {label}
        </UIButton>
      )
    }
    case "form-trigger": {
      return (
        <Slot {...props}>
          <UIButton
            variant={props.version === "default" ? "default" : "outline"}
            className="hover:cursor-pointer min-w-20"
          >
            {props.label}
          </UIButton>
        </Slot>
      )
    }
    case "add-new": {
      const { label, handleClick } = props
      return <AddNew label={label} handleClick={handleClick} />
    }
    case "toggle-icon": {
      const { icon, handleClick, className } = props
      return (
        <UIButton
          type="button"
          variant="ghost"
          className={`hover:cursor-pointer rounded-full ${className ?? ""}`}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            handleClick()
            e.preventDefault()
          }}
        >
          {icon}
        </UIButton>
      )
    }
  }
}
