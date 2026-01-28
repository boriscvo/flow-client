import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReminderType } from "@/types/api/reminder"
import { useEffect, useState } from "react"
import { formatDate } from "date-fns"
import { getBrowserTimezone } from "@/utils/helpers/get-browser-timezone"
import { TIMEZONE_OPTIONS } from "@/utils/const/timezones"

type Args = {
  initialReminder?: ReminderType | null
  handleSelectReminder: (id?: string | null) => void
}

const ReminderFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  message: z.string().min(1, "Message is required"),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
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
}: Args) {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [formVariant, setFormVariant] = useState<"create" | "edit">("create")

  const handleFormOpen = (id?: string | null) => {
    if (id) {
      handleSelectReminder(id)
      setFormVariant("edit")
    } else {
      setFormVariant("create")
    }
    setIsFormOpen(true)
  }

  const handleFormClose = () => {
    setIsFormOpen(false)
    handleSelectReminder(null)
    reminderData.reset()
  }

  const reminderData = useForm<ReminderFormValues>({
    resolver: zodResolver(ReminderFormSchema),
    defaultValues: DefaultFormValues,
  })

  const handleSubmitReminder = reminderData.handleSubmit(() => {})

  useEffect(() => {
    if (initialReminder) {
      const date = new Date(initialReminder.scheduledAt)
      reminderData.reset({
        title: initialReminder.title,
        message: initialReminder.message,
        phoneNumber: initialReminder.phoneNumber,
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
    isFormOpen,
    formVariant,
    formLabel: formVariant === "create" ? "Create Reminder" : "Edit Reminder",
    handleFormOpen,
    handleFormClose,
    handleSubmitReminder,
  }
}
