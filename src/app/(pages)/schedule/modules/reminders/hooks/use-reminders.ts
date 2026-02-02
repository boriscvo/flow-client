import { useMemo, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import { ReminderDetailsType, ReminderType } from "@/types/api/reminder"
import { useMutation, useQuery } from "@tanstack/react-query"
import {
  deleteReminder,
  getReminder,
  getReminders,
  postSnooze,
} from "@/api/reminders"
import { toast } from "sonner"

export function useReminders() {
  const queryClient = useQueryClient()
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
  const [snoozeId, setSnoozeId] = useState<string | null>(null)
  const [isSortAsc, setIsSortAsc] = useState(true)
  const [shouldHideCompleted, setShouldHideCompleted] = useState(false)

  const handleSortToggle = () => {
    setIsSortAsc(!isSortAsc)
  }

  const handleHideCompletedToggle = () => {
    setShouldHideCompleted(!shouldHideCompleted)
  }

  const {
    data: reminders,
    refetch: refetchReminders,
    status: fetchRemindersStatus,
  } = useQuery<ReminderType[]>({
    queryKey: ["reminders"],
    queryFn: getReminders,
    refetchOnWindowFocus: false,
  })

  const {
    data: reminderDetails,
    status: fetchReminderDetailsStatus,
    refetch: refetchReminderDetails,
  } = useQuery<ReminderDetailsType>({
    queryKey: ["reminder", reminderId],
    queryFn: () => getReminder(reminderId),
    enabled: !!reminderId,
    refetchOnWindowFocus: false,
  })

  const { mutate: mutateDelete, status: deleteReminderStatus } = useMutation({
    mutationFn: () => deleteReminder(reminderId),
    onSuccess: () => {
      toast.success("Reminder deleted successfully")
      queryClient.invalidateQueries({ queryKey: ["reminders-stats"] })
      handleRefetchReminders()
      handleCloseDelete()
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to delete reminder",
      )
    },
  })

  const { mutate: mutateSnooze, status: postSnoozeStatus } = useMutation({
    mutationFn: (id: string | null) => postSnooze(id),
    onMutate(variables) {
      setSnoozeId(variables)
    },
    onSuccess: () => {
      toast.success("Reminder delayed for 5 minutes")
      queryClient.invalidateQueries({ queryKey: ["reminders-stats"] })
      handleRefetchReminders()
      handleCloseDelete()
      setSnoozeId(null)
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to snooze reminder",
      )
      setSnoozeId(null)
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
    mutateDelete()
  }
  const handleCloseDelete = () => {
    setIsOpenDelete(false)
    setReminderId(null)
  }

  const handleOpenDetails = (id: string) => {
    setReminderId(id)
    setIsOpenDetails(true)
  }
  const handleCloseDetails = () => {
    setIsOpenDetails(false)
    setSelectedReminder(null)
  }

  const handleRefetchReminders = () => {
    refetchReminders()
  }

  const handleRefetchReminderDetails = () => {
    refetchReminderDetails()
  }

  const handleSnooze = (id: string) => {
    mutateSnooze(id)
  }

  const sortedReminders = useMemo(() => {
    const filteredReminders = shouldHideCompleted
      ? reminders?.filter((reminder) => reminder.status === "scheduled")
      : reminders

    if (isSortAsc) {
      return (
        filteredReminders
          ?.slice()
          .sort(
            (a, b) =>
              new Date(b.scheduledAt).getTime() -
              new Date(a.scheduledAt).getTime(),
          ) || []
      )
    } else {
      return (
        filteredReminders
          ?.slice()
          .sort(
            (a, b) =>
              new Date(a.scheduledAt).getTime() -
              new Date(b.scheduledAt).getTime(),
          ) || []
      )
    }
  }, [reminders, isSortAsc, shouldHideCompleted])

  return {
    reminders: sortedReminders,
    isOpenDelete,
    isOpenDetails,
    selectedReminder,
    reminderDeleteExcerpt,
    fetchRemindersStatus,
    reminderDetails,
    fetchReminderDetailsStatus,
    postSnoozeStatus,
    deleteReminderStatus,
    snoozeId,
    shouldHideCompleted,
    isSortAsc,
    handleOpenDelete,
    handleOpenDetails,
    handleCloseDelete,
    handleCloseDetails,
    handleSelectReminder,
    handleRefetchReminders,
    handleConfirmDelete,
    handleSnooze,
    handleRefetchReminderDetails,
    handleSortToggle,
    handleHideCompletedToggle,
  }
}
