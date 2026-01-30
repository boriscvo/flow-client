"use client"
import { Dialog } from "@/components/blocks"
import { Container, Content, DeleteAlert, Details, RemindersTitle } from "./ui"
import { useReminderForm, useReminders } from "./hooks"

export function Reminders() {
  const {
    reminders,
    isOpenDelete,
    isOpenDetails,
    selectedReminder,
    reminderDeleteExcerpt,
    fetchRemindersStatus,
    reminderDetails,
    fetchReminderDetailsStatus,
    handleOpenDelete,
    handleOpenDetails,
    handleCloseDelete,
    handleCloseDetails,
    handleSelectReminder,
    handleRefetchReminders,
    handleConfirmDelete,
    handleRefetchReminderDetails,
  } = useReminders()

  const {
    reminderData,
    isFormOpen,
    formLabel,
    postReminderStatus,
    handleFormOpen,
    handleFormClose,
    handleSubmitReminder,
  } = useReminderForm({
    initialReminder: selectedReminder,
    handleSelectReminder,
    handleRefetchReminders,
  })

  return (
    <>
      <RemindersTitle
        shouldShowAddNew={reminders.length > 0}
        handleClick={handleFormOpen}
      />
      <Container>
        <Content
          state={fetchRemindersStatus}
          reminders={reminders}
          handlers={{
            handleOpenDelete,
            handleOpenDetails,
            handleFormOpen,
            handleOpenSnooze: () => {},
            handleRefetchReminders,
          }}
        />
      </Container>
      <Dialog
        variant="details"
        title="Reminder Details"
        isOpen={isOpenDetails}
        isError={fetchReminderDetailsStatus === "error"}
        handleClose={handleCloseDetails}
        handleRetry={handleRefetchReminderDetails}
        contentSlot={
          <Details
            reminder={reminderDetails}
            status={fetchReminderDetailsStatus}
          />
        }
      />
      <Dialog
        variant="alert"
        title="Delete Reminder"
        isOpen={isOpenDelete}
        handleClose={handleCloseDelete}
        handleConfirm={handleConfirmDelete}
        descriptionSlot={<DeleteAlert excerpt={reminderDeleteExcerpt} />}
      />
      <Dialog
        variant="reminder-form"
        isOpen={isFormOpen}
        title={formLabel}
        form={reminderData}
        isLoading={postReminderStatus === "pending"}
        handleSubmit={handleSubmitReminder}
        handleClose={handleFormClose}
      />
    </>
  )
}
