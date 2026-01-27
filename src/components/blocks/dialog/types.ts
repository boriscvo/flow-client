export type CommonDialogProps = {
  title: string
  isOpen: boolean
  handleClose: () => void
}

export type KeyValueDialogProps = CommonDialogProps & {
  variant: "details"
  contentSlot: React.ReactNode
}

export type AlertDialogProps = CommonDialogProps & {
  variant: "alert"
  descriptionSlot: React.ReactNode
  handleConfirm: () => void
}

export type DialogProps = KeyValueDialogProps | AlertDialogProps
