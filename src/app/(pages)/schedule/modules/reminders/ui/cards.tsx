import { ReminderCard } from "@/components/blocks"
import { ReminderHandlers } from "../types"
import { ReminderType } from "@/types/api/reminder"

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
    return (
      <ReminderCard
        variant="component"
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
