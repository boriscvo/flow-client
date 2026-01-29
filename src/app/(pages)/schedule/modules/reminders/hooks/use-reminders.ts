import { useState } from "react"
import { ReminderType } from "@/types/api/reminder"
import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteReminder, getReminders } from "@/api/reminders"
import { toast } from "sonner"

export function useReminders() {
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

  const {
    data: reminders,
    refetch,
    status: fetchRemindersStatus,
  } = useQuery<ReminderType[]>({
    queryKey: ["reminders"],
    queryFn: getReminders,
  })

  const { mutate } = useMutation({
    mutationFn: () => deleteReminder(reminderId),
    onSuccess: () => {
      toast.success("Reminder deleted successfully")
      handleRefetchReminders()
      handleCloseDelete()
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete reminder",
      )
    },
  })

  const handleSelectReminder = (id?: string | null) => {
    const reminder = reminders?.find((reminder) => reminder.id === id) || null
    setSelectedReminder(reminder)
  }

  const handleOpenDelete = (id: string) => {
    const reminder = reminders?.find((reminder) => reminder.id === id)
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

  const handleConfirmDelete = () => {
    mutate()
  }
  const handleCloseDelete = () => {
    setIsOpenDelete(false)
    setReminderId(null)
  }

  const handleOpenDetails = (id: string) => {
    const reminder = reminders?.find((reminder) => reminder.id === id) || null
    setSelectedReminder(reminder)
    setIsOpenDetails(true)
  }
  const handleCloseDetails = () => {
    setIsOpenDetails(false)
    setSelectedReminder(null)
  }

  const handleRefetchReminders = () => {
    refetch()
  }

  return {
    reminders: reminders || [],
    isOpenDelete,
    isOpenDetails,
    selectedReminder,
    reminderDeleteExcerpt,
    fetchRemindersStatus,
    handleOpenDelete,
    handleOpenDetails,
    handleCloseDelete,
    handleCloseDetails,
    handleSelectReminder,
    handleRefetchReminders,
    handleConfirmDelete,
  }
}
