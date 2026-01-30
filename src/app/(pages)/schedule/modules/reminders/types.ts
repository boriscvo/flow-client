export type ReminderHandlers = {
  handleOpenDelete: (id: string) => void
  handleOpenSnooze: (id: string) => void
  handleNewFormOpen: () => void
  handleEditFormOpen: (id: string) => void
  handleOpenDetails: (id: string) => void
  handleRefetchReminders: () => void
}

export type ReminderLoadingStateProps = {
  variant: "loading"
}

export type ReminderErrorStateProps = {
  variant: "error"
  handleRetry: () => void
}

export type ReminderEmptyStateProps = {
  variant: "empty"
  handleAddNew: () => void
}

export type ReminderTransitionStateProps =
  | ReminderLoadingStateProps
  | ReminderErrorStateProps
  | ReminderEmptyStateProps
