"use client"

import { ReminderCard, ReminderCardType } from "@/components/blocks"

export const remindersMock = [
  {
    id: "1",
    title: "Call mom",
    message: "Don't forget to call mom and ask about the doctor visit.",
    scheduledAt: "2026-01-26T14:30:00Z",
    timezone: "Europe/Belgrade",
    phoneNumber: "****4567",
    status: "scheduled",
  },
  {
    id: "2",
    title: "Team standup",
    message: "Daily standup meeting reminder.",
    scheduledAt: "2026-01-26T09:00:00Z",
    timezone: "Europe/Belgrade",
    phoneNumber: "****2671",
    status: "completed",
  },
  {
    id: "3",
    title: "Pay electricity bill",
    message: "Pay the electricity bill before the deadline.",
    scheduledAt: "2026-01-25T18:00:00Z",
    timezone: "Europe/Belgrade",
    phoneNumber: "****2223",
    status: "failed",
  },
  {
    id: "4",
    title: "Dentist appointment",
    message: "Reminder for dentist appointment.",
    scheduledAt: "2026-01-27T11:15:00Z",
    timezone: "Europe/Belgrade",
    phoneNumber: "****5678",
    status: "scheduled",
  },
] satisfies ReminderCardType[]

export function Reminders() {
  return (
    <div className="flex flex-col gap-4">
      {remindersMock.map((reminder) => (
        <ReminderCard
          key={reminder.id}
          reminder={reminder}
          handleOpenDelete={() => {}}
          handleOpenDetails={() => {}}
          handleOpenEdit={() => {}}
          handleOpenSnooze={() => {}}
        />
      ))}
    </div>
  )
}
