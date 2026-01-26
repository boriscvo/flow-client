export type ButtonVariant = "card-link"

export type CommonButtonProps = {
  label: string
  handleClick: () => void
}

export type InlineCardButtonProps = CommonButtonProps & {
  variant: "inline-card"
  state: "default" | "loading" | "disabled" | "done" | "error"
  iconSlot: React.ReactNode
}

export type ButtonProps = InlineCardButtonProps
