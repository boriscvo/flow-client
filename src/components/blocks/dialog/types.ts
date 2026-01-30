import { ReminderUpdateType } from "@/types/api/reminder"
import { UseFormReturn } from "react-hook-form"

export type CommonDialogProps = {
  title: string
  isOpen: boolean
  handleClose: () => void
}

export type KeyValueDialogProps = CommonDialogProps & {
  variant: "details"
  contentSlot: React.ReactNode
  isError: boolean
  handleRetry: () => void
}

export type AlertDialogProps = CommonDialogProps & {
  variant: "alert"
  descriptionSlot: React.ReactNode
  handleConfirm: () => void
}

export type ReminderFormDialogProps = CommonDialogProps & {
  variant: "reminder-form"
  isLoading: boolean
  form: UseFormReturn<ReminderUpdateType>
  handleSubmit: () => void
}

export type DialogProps =
  | KeyValueDialogProps
  | AlertDialogProps
  | ReminderFormDialogProps
