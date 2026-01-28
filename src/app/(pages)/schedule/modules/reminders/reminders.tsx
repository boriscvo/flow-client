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
    handleOpenDelete,
    handleOpenDetails,
    handleCloseDelete,
    handleCloseDetails,
    handleSelectReminder,
  } = useReminders()

  const {
    reminderData,
    isFormOpen,
    formLabel,
    handleFormOpen,
    handleFormClose,
    handleSubmitReminder,
  } = useReminderForm({
    initialReminder: selectedReminder,
    handleSelectReminder,
  })

  return (
    <>
      <RemindersTitle
        shouldShowAddNew={reminders.length > 0}
        handleClick={handleFormOpen}
      />
      <Container>
        <Content
          state="success"
          reminders={reminders}
          handlers={{
            handleOpenDelete,
            handleOpenDetails,
            handleFormOpen,
            handleOpenSnooze: () => {},
          }}
        />
      </Container>
      <Dialog
        variant="details"
        title="Reminder Details"
        isOpen={isOpenDetails}
        handleClose={handleCloseDetails}
        contentSlot={<Details reminder={selectedReminder} />}
      />
      <Dialog
        variant="alert"
        title="Delete Reminder"
        isOpen={isOpenDelete}
        handleClose={handleCloseDelete}
        handleConfirm={() => {}}
        descriptionSlot={<DeleteAlert excerpt={reminderDeleteExcerpt} />}
      />
      <Dialog
        variant="reminder-form"
        isOpen={isFormOpen}
        title={formLabel}
        form={reminderData}
        handleSubmit={handleSubmitReminder}
        handleClose={handleFormClose}
      />
    </>
  )
}
