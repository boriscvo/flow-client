"use client"
import { Dialog, ReminderCard } from "@/components/blocks"
import { useReminders } from "./use-reminders"
import { DeleteAlert, Details } from "./ui"

export function Reminders() {
  const {
    remindersMock,
    selectedReminder,
    isOpenDelete,
    isOpenDetails,
    reminderDeleteExcerpt,
    handleOpenDelete,
    handleCloseDelete,
    handleCloseDetails,
    handleOpenDetails,
  } = useReminders()

  return (
    <>
      <div className="flex flex-col gap-4">
        {remindersMock.map((reminder) => (
          <ReminderCard
            key={reminder.id}
            reminder={reminder}
            handleOpenDelete={() => handleOpenDelete(reminder.id)}
            handleOpenDetails={() => handleOpenDetails(reminder.id)}
            handleOpenEdit={() => {}}
            handleOpenSnooze={() => {}}
          />
        ))}
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
    </>
  )
}
