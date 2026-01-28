import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReminderUpdateType } from "@/types/api/reminder"
import { useEffect, useState } from "react"

type Args = {
  initialReminder?: ReminderUpdateType | null
  handleSelectReminder: (id?: string | null) => void
}

const ReminderFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  message: z.string().min(1, "Message is required"),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"),
  createdAt: z.string().min(1, "Date and time are required"),
  timezone: z.string().min(1, "Timezone is required"),
})

const DefaultFormValues = {
  title: "",
  message: "",
  phoneNumber: "",
  createdAt: "",
  timezone: "",
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
      reminderData.reset({
        title: initialReminder.title,
        message: initialReminder.message,
        phoneNumber: initialReminder.phoneNumber,
        createdAt: initialReminder.createdAt,
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
