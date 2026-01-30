import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReminderType } from "@/types/api/reminder"
import { useEffect, useState } from "react"
import { format, formatDate, parse } from "date-fns"
import { getBrowserTimezone } from "@/utils/helpers/get-browser-timezone"
import { TIMEZONE_OPTIONS } from "@/utils/const/timezones"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { postReminder, putReminder } from "@/api/reminders"

type Args = {
  initialReminder?: ReminderType | null
  handleSelectReminder: (id?: string | null) => void
  handleRefetchReminders: () => void
}

const ReminderFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  message: z.string().min(1, "Message is required"),
  phoneNumber: z
    .string()
    .transform((v) => v.replace(/\s+/g, ""))
    .pipe(z.string().regex(/^\+[1-9]\d{1,14}$/, "Invalid phone number")),
  scheduledAtDate: z.string().min(1, "Date is required"),
  scheduledAtTime: z.string().min(1, "Time is required"),
  timezone: z.string().min(1, "Timezone is required"),
})

const defaultTimezone = getBrowserTimezone()

const DefaultFormValues = {
  title: "",
  message: "",
  phoneNumber: "",
  scheduledAtDate: "",
  scheduledAtTime: "",
  timezone: TIMEZONE_OPTIONS.find((tz) => tz.value === defaultTimezone)
    ? defaultTimezone
    : "",
}

type ReminderFormValues = z.infer<typeof ReminderFormSchema>

export function useReminderForm({
  initialReminder,
  handleSelectReminder,
  handleRefetchReminders,
}: Args) {
  const queryClient = useQueryClient()
  const [isNewFormOpen, setIsNewFormOpen] = useState(false)
  const [isEditFormOpen, setIsEditFormOpen] = useState(false)

  const handleEditFormOpen = (id?: string | null) => {
    if (id) {
      handleSelectReminder(id)
    }
    setIsEditFormOpen(true)
  }

  const handleNewFormOpen = () => {
    setIsNewFormOpen(true)
  }

  const handleFormClose = () => {
    setIsNewFormOpen(false)
    setIsEditFormOpen(false)
    handleSelectReminder(null)
    reminderData.reset()
  }

  const reminderData = useForm<ReminderFormValues>({
    resolver: zodResolver(ReminderFormSchema),
    defaultValues: DefaultFormValues,
  })

  const { mutate: updateReminder, status: putReminderStatus } = useMutation({
    mutationFn: (values: ReminderFormValues) =>
      putReminder(values, initialReminder?.id ?? null),
    onSuccess: () => {
      toast.success("Reminder updated successfully")
      queryClient.invalidateQueries({ queryKey: ["reminders-stats"] })
      handleRefetchReminders()
      handleFormClose()
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to update reminder",
      )
    },
  })

  const { mutate: createReminder, status: postReminderStatus } = useMutation({
    mutationFn: postReminder,
    onSuccess: () => {
      toast.success("Reminder saved successfully")
      queryClient.invalidateQueries({ queryKey: ["reminders-stats"] })
      handleRefetchReminders()
      handleFormClose()
    },
    onError: (error) => {
      toast.error(
        error instanceof Error ? error.message : "Failed to save reminder",
      )
    },
  })

  const handleCreateReminder = reminderData.handleSubmit((values) => {
    const isoDate = format(
      parse(values.scheduledAtDate, "M/d/yyyy", new Date()),
      "yyyy-MM-dd",
    )
    createReminder({
      ...values,
      scheduledAtDate: isoDate,
    })
  })

  const handleUpdateReminder = reminderData.handleSubmit((values) => {
    const isoDate = format(
      parse(values.scheduledAtDate, "M/d/yyyy", new Date()),
      "yyyy-MM-dd",
    )
    updateReminder({
      ...values,
      scheduledAtDate: isoDate,
    })
  })

  useEffect(() => {
    if (initialReminder) {
      const date = new Date(initialReminder.scheduledAt)
      reminderData.reset({
        title: initialReminder.title,
        message: initialReminder.message,
        phoneNumber: "",
        scheduledAtDate: date.toLocaleDateString(),
        scheduledAtTime: formatDate(date, "HH:mm"),
        timezone: initialReminder.timezone,
      })
    } else {
      reminderData.reset({
        ...DefaultFormValues,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialReminder])

  return {
    reminderData,
    isEditFormOpen,
    isNewFormOpen,
    postReminderStatus,
    putReminderStatus,
    handleNewFormOpen,
    handleEditFormOpen,
    handleFormClose,
    handleCreateReminder,
    handleUpdateReminder,
  }
}
