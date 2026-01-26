export type ReminderCardType = {
  id: string
  title: string
  message: string
  scheduledAt: string
  timezone: string
  phoneNumber: string
  status: "scheduled" | "completed" | "failed"
}

export type ReminderCardProps = {
  reminder: ReminderCardType
  handleOpenDelete: (id: string) => void
  handleOpenSnooze: (id: string) => void
  handleOpenEdit: (id: string) => void
  handleOpenDetails: (id: string) => void
}
