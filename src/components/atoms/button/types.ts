export type CommonButtonProps = {
  label: string
  handleClick: () => void
}

export type InlineCardButtonProps = CommonButtonProps & {
  variant: "inline-card"
  state: "default" | "loading" | "disabled" | "done" | "error"
  iconSlot: React.ReactNode
  isDestructive?: boolean // Not the fan of booleans in general but let's have it here
}

export type ButtonProps = InlineCardButtonProps
