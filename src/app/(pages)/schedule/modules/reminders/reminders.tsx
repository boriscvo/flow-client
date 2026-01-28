"use client"
import { Dialog, ReminderCard } from "@/components/blocks"
import { DeleteAlert, Details, RemindersTitle } from "./ui"
import { useReminderForm, useReminders } from "./hooks"

export function Reminders() {
  const {
    remindersMock,
    isOpenDelete,
    isOpenDetails,
    selectedReminder,
    reminderDeleteExcerpt,
    handleOpenDelete,
    handleCloseDelete,
    handleOpenDetails,
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
      <RemindersTitle handleClick={handleFormOpen} />
      <div className="flex flex-col gap-4">
        {remindersMock.map((reminder) => {
          return (
            <ReminderCard
              key={reminder.id}
              reminder={reminder}
              handleOpenDelete={handleOpenDelete}
              handleOpenDetails={handleOpenDetails}
              handleOpenEdit={handleFormOpen}
              handleOpenSnooze={() => {}}
            />
          )
        })}
      </div>
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
