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
}

export type ReminderDetailsType = ReminderType & {
  createdAt: string
  failureReason?: string
}

export type ReminderUpdateType = {
  title: string
  message: string
  phoneNumber: string
  scheduledAtDate: string
  scheduledAtTime: string
  timezone: string
}

export type ReminderStatsType = {
  totalReminders: number
  todayReminders: number
  failedReminders: number
  nextReminderAt: string | null
}
