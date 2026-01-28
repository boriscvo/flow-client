import { ReminderType } from "@/types/api/reminder"
import { useState } from "react"

export function useReminders() {
  const remindersMock = [
    {
      id: "1",
      title: "Call mom",
      message: "Don't forget to call mom and ask about the doctor visit.",
      scheduledAt: "2026-01-26T14:30:00Z",
      timezone: "Europe/Belgrade",
      phoneNumber: "****4567",
      status: "scheduled",
      createdAt: "2026-01-20T10:00:00Z",
    },
    {
      id: "2",
      title: "Team standup",
      message: "Daily standup meeting reminder.",
      scheduledAt: "2026-01-26T09:00:00Z",
      timezone: "Europe/Belgrade",
      phoneNumber: "****2671",
      status: "completed",
      createdAt: "2026-01-20T10:00:00Z",
    },
    {
      id: "3",
      title: "Pay electricity bill",
      message:
        "Pay the electricity bill before the deadline. Pay the electricity bill before the deadline. Pay the electricity bill before the deadline. Pay the electricity bill before the deadline. Pay the electricity bill before the deadline.",
      scheduledAt: "2026-01-25T18:00:00Z",
      timezone: "Europe/Belgrade",
      phoneNumber: "****2223",
      status: "failed",
      createdAt: "2026-01-20T10:00:00Z",
    },
    {
      id: "4",
      title: "Dentist appointment",
      message: "Reminder for dentist appointment.",
      scheduledAt: "2026-01-30T11:15:00Z",
      timezone: "Europe/Belgrade",
      phoneNumber: "****5678",
      status: "scheduled",
      createdAt: "2026-01-20T10:00:00Z",
    },
  ] satisfies ReminderType[]

  const [reminderId, setReminderId] = useState<string | null>(null)
  const [selectedReminder, setSelectedReminder] = useState<ReminderType | null>(
    null,
  )
  const [reminderDeleteExcerpt, setReminderDeleteExcerpt] = useState<Pick<
    ReminderType,
    "scheduledAt" | "title"
  > | null>(null)

  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenDetails, setIsOpenDetails] = useState(false)

  const handleSelectReminder = (id?: string | null) => {
    const reminder =
      remindersMock.find((reminder) => reminder.id === id) || null
    setSelectedReminder(reminder)
  }

  const handleOpenDelete = (id: string) => {
    const reminder = remindersMock.find((reminder) => reminder.id === id)
    const reminderExcerpt = reminder
      ? {
          scheduledAt: reminder.scheduledAt,
          title: reminder.title,
        }
      : null
    setReminderDeleteExcerpt(reminderExcerpt || null)
    setReminderId(id)
    setIsOpenDelete(true)
  }
  const handleCloseDelete = () => {
    setIsOpenDelete(false)
    setReminderId(null)
  }

  const handleOpenDetails = (id: string) => {
    const reminder =
      remindersMock.find((reminder) => reminder.id === id) || null
    setSelectedReminder(reminder)
    setIsOpenDetails(true)
  }
  const handleCloseDetails = () => {
    setIsOpenDetails(false)
    setSelectedReminder(null)
  }

  return {
    remindersMock,
    isOpenDelete,
    isOpenDetails,
    selectedReminder,
    reminderDeleteExcerpt,
    handleOpenDelete,
    handleCloseDelete,
    handleOpenDetails,
    handleCloseDetails,
    handleSelectReminder,
  }
}
