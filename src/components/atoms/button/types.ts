export type CommonButtonProps = {
  label: string | React.ReactNode
  handleClick: () => void
}

export type MainButtonProps = CommonButtonProps & {
  variant: "default" | "secondary" | "destructive" | "outline"
  isDisabled?: boolean
}

export type InlineCardButtonProps = CommonButtonProps & {
  variant: "inline-card"
  state: "default" | "loading" | "disabled" | "done" | "error"
  iconSlot: React.ReactNode
  isDestructive?: boolean
  isDisabled?: boolean
}

export type FormTriggerButtonProps = {
  label: string | React.ReactNode
  variant: "form-trigger"
  type?: "button" | "submit" | "reset"
  version: "default" | "outline"
}

export type AddNewButtonProps = CommonButtonProps & {
  variant: "add-new"
}

export type ButtonProps =
  | InlineCardButtonProps
  | MainButtonProps
  | AddNewButtonProps
  | FormTriggerButtonProps
