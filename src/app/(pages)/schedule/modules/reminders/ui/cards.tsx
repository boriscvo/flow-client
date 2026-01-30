import { ReminderCard } from "@/components/blocks"
import { ReminderHandlers } from "../types"
import { ReminderType } from "@/types/api/reminder"
import { differenceInSeconds } from "date-fns"

type Props = {
  reminders: ReminderType[]
  handlers: ReminderHandlers
}

export function Cards({ reminders, handlers }: Props) {
  const {
    handleOpenDelete,
    handleOpenDetails,
    handleFormOpen,
    handleOpenSnooze,
  } = handlers
  return reminders.map((reminder) => {
    const { scheduledAt } = reminder
    const target = new Date(scheduledAt)
    const now = new Date()
    const diffSeconds = differenceInSeconds(target, now)

    return (
      <ReminderCard
        variant="component"
        isPast={diffSeconds <= 0}
        key={reminder.id}
        reminder={reminder}
        handleOpenDelete={handleOpenDelete}
        handleOpenDetails={handleOpenDetails}
        handleOpenEdit={handleFormOpen}
        handleOpenSnooze={handleOpenSnooze}
      />
    )
  })
}
