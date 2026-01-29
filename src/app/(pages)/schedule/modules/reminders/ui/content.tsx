import { ReminderType } from "@/types/api/reminder"
import { ReminderHandlers } from "../types"
import { Cards } from "./cards"
import { TransitionState } from "./transition-state"

type Props = {
  state: "pending" | "success" | "error"
  reminders: ReminderType[]
  handlers: ReminderHandlers
}

export function Content({ state, reminders, handlers }: Props) {
  if (state === "pending") {
    return <TransitionState variant="loading" />
  }

  if (state === "error") {
    return (
      <TransitionState
        variant="error"
        handleRetry={handlers.handleRefetchReminders}
      />
    )
  }

  if (reminders.length === 0) {
    return (
      <TransitionState variant="empty" handleAddNew={handlers.handleFormOpen} />
    )
  }

  return <Cards reminders={reminders} handlers={handlers} />
}
