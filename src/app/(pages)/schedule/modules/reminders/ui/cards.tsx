import { ReminderCard } from "@/components/blocks"
import { ReminderHandlers } from "../types"
import { ReminderType } from "@/types/api/reminder"
import { differenceInSeconds } from "date-fns"

type Props = {
  reminders: ReminderType[]
  snoozeId: string | null
  isSnoozeLoading?: boolean
  handlers: ReminderHandlers
}

export function Cards({
  reminders,
  snoozeId,
  isSnoozeLoading,
  handlers,
}: Props) {
  const {
    handleOpenDelete,
    handleOpenDetails,
    handleEditFormOpen,
    handleSnooze,
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
        isSnoozeLoading={isSnoozeLoading && snoozeId === reminder.id}
        key={reminder.id}
        reminder={reminder}
        handleOpenDelete={handleOpenDelete}
        handleOpenDetails={handleOpenDetails}
        handleOpenEdit={handleEditFormOpen}
        handleSnooze={handleSnooze}
      />
    )
  })
}
