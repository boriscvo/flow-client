export type ReminderCardType = {
  id: string
  title: string
  message: string
  scheduledAt: string
  timezone: string
  phoneNumber: string
  status: "scheduled" | "completed" | "failed"
}

export type ReminderCardPlaceholderType = {
  variant: "placeholder"
}

export type ReminderCardFullType = {
  variant: "component"
  reminder: ReminderCardType
  isPast?: boolean
  handleOpenDelete: (id: string) => void
  handleOpenSnooze: (id: string) => void
  handleOpenEdit: (id: string) => void
  handleOpenDetails: (id: string) => void
}

export type ReminderCardProps =
  | ReminderCardFullType
  | ReminderCardPlaceholderType
