export type ReminderCardType = {
  id: string
  title: string
  message: string
  scheduledAt: string
  timezone: string
  phoneNumber: string
  snoozeCount?: number
  status: "scheduled" | "completed" | "failed"
}

export type ReminderCardPlaceholderType = {
  variant: "placeholder"
}

export type ReminderCardFullType = {
  variant: "component"
  reminder: ReminderCardType
  isPast?: boolean
  isSnoozeLoading?: boolean
  snoozeCount?: number
  handleOpenDelete: (id: string) => void
  handleSnooze: (id: string) => void
  handleOpenEdit: (id: string) => void
  handleOpenDetails: (id: string) => void
}

export type ReminderCardProps =
  | ReminderCardFullType
  | ReminderCardPlaceholderType
