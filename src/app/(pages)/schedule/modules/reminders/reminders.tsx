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
    isEditFormOpen,
    isNewFormOpen,
    postReminderStatus,
    putReminderStatus,
    handleNewFormOpen,
    handleEditFormOpen,
    handleFormClose,
    handleCreateReminder,
    handleUpdateReminder,
  } = useReminderForm({
    initialReminder: selectedReminder,
    handleSelectReminder,
    handleRefetchReminders,
  })

  return (
    <>
      <RemindersTitle
        shouldShowAddNew={
          reminders.length > 0 && fetchRemindersStatus === "success"
        }
        handleClick={handleNewFormOpen}
      />
      <Container>
        <Content
          state={fetchRemindersStatus}
          reminders={reminders}
          handlers={{
            handleOpenDelete,
            handleOpenDetails,
            handleEditFormOpen,
            handleNewFormOpen,
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
        isOpen={isNewFormOpen}
        title={"Create Reminder"}
        form={reminderData}
        isLoading={postReminderStatus === "pending"}
        handleSubmit={handleCreateReminder}
        handleClose={handleFormClose}
      />
      <Dialog
        variant="reminder-form"
        isOpen={isEditFormOpen}
        title={"Edit Reminder"}
        form={reminderData}
        isLoading={putReminderStatus === "pending"}
        handleSubmit={handleUpdateReminder}
        handleClose={handleFormClose}
      />
    </>
  )
}
