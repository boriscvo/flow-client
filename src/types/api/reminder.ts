export type ReminderStatus = "scheduled" | "completed" | "failed"

export type ReminderType = {
  id: string
  title: string
  message: string
  phoneNumber: string
  scheduledAt: string
  timezone: string
  status: ReminderStatus
  snoozeCount?: number
  failureReason?: string
  createdAt: string
  updatedAt?: string
}

export type ReminderUpdateType = {
  title: string
  message: string
  phoneNumber: string
  createdAt: string
  timezone: string
}
